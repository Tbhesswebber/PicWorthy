import React, { Component } from 'react';
import _ from 'lodash';


import WorthyMap from '../helper_components/worthyMap.jsx';
import PicRow from '../helper_components/picRow.jsx';
import Details from '../helper_components/picDetail.jsx';

class Locations extends Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: [],
      zoom: 4,
      position: {lat: 37.09, lng: -95.71},
      detailedPicURL: 'NONE'
    };
    this.updatePictures = _.throttle(this.props.updatePictures.bind(this), 1000);
  }

  render() {
    const photos = this.props.userData.photos.slice(0);

    return (
      <div className="body-content-equal-thirds fullh fullw" >
        <div className={`${(photos.length === 0 ? 'full-grid' : 'top-two-thirds')} map`} >
        
        <WorthyMap
          markers={ this.state.markers } 
          defaultZoom={ this.state.zoom }
          defaultCenter={ this.state.position } 
          onCenterChanged={ this.updatePictures }
        />
        
        </div>
        
          { photos.length === 0 ? null :
            <PicRow
              photos={photos}
              mainClass="bottom-third"
              renderCount={4}
              title="Around You"
            />
          }
      </div>
    );
  }
}

export default Locations;