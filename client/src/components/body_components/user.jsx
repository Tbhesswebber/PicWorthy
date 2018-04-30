import React from 'react';

import WorthyMap from '../helper_components/worthyMap.jsx';
import PicRow from '../helper_components/picRow.jsx';
import Details from '../helper_components/picDetail.jsx';

const User = (props) => {
    
  const photos = props.userData.photos.slice(0);

  return (
    <div className="user fullh fullw" >
      
      <h1>Hello {props.userData.firstName}</h1>
      <h2>Your Places</h2>
      
      { photos.length === 0 ? null :
        <PicRow 
          // showHideDetails={ props.showHideDetails }
          photos={ photos }
          detailedPicURL={ props.detailedPicURL }
        />
      }
    
    </div>
  )
}

export default User;