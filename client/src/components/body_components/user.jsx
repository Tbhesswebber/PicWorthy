import React from 'react';

import WorthyMap from '../helper_components/worthyMap.jsx';
import PicRow from '../helper_components/picRow.jsx';
import Details from '../helper_components/picDetail.jsx';

const User = (props) => {
    
  const photos = props.userData.photos.slice(0);

  const markers = photos.reduce((acc, photo) => acc.splice(-1, 0, photo.latLng), []);

  return (
    <div className="user fullh fullw body-content-equal-thirds" >
      <div className="user-pic-row top-two-thirds">
      { photos.length === 0 ? null :
        <PicRow 
          photos={photos}
          mainClass="top-two-thirds"
          renderCount={4}
          title="Your Places"
        />
      }
      </div>
      <div className={`user-map ${photos.length === 0 ? 'full-grid' : 'bottom-third'}`}>
        <WorthyMap
          markers={markers}
          clickMap={() => {}}
          defaultZoom={10}
          defaultCenter={ {lat: 1, lng: 1} }
        />
      </div>
    </div>
  );
}

export default User;