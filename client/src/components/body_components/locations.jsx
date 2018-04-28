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
    // this.updatePictures = _.throttle(this.props.updatePictures.bind(this), 1000);
    // this.updateDisplayAmount = this.updateDisplayAmount.bind(this);
    // this.getUserLocation = getUserLocation.bind(this);
    // this.showHideDetails = showHideDetails.bind(this);
    // this.handleStarClick = this.handleStarClick.bind(this);
    // this.rotatePics = this.rotatePics.bind(this);
    // this.rotatePicsLocation = rotatePicsLocation.bind(this);
    // this.rotatePicsUserpage = rotatePicsUserpage.bind(this);
    // this.rotatePicsLikes = rotatePicsLikes.bind(this);
  }
 

  componentDidMount() {
    // this.getUserLocation();
    // this.updateDisplayAmount();
    window.addEventListener('resize', this.updateDisplayAmount);
  }

  render() {
    // const pics = this.props.pics.slice(0, this.props.displayAmount);

    return (
      <div>
        <div>
        
        <WorthyMap
          markers={ this.state.markers } 
          defaultZoom={ this.state.zoom }
          defaultCenter={ this.state.position } 
          onCenterChanged={ this.updatePictures }
        />
        
        </div>
        
        <div>
          Around You
        </div>
        
        <div>
          { pics.length === 0 ? null :
            <PicRow 
              showHideDetails={ this.showHideDetails } 
              rowType="locations"
              pics={ pics }
              detailedPicURL={ this.state.detailedPicURL }
            />
          }
        </div>
        
        <div>
          <Details />
        </div>
      </div>
    );
  }
}

export default Locations;