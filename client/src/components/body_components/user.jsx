import React from 'react';

import WorthyMap from '../helper_components/worthyMap.jsx';
import PicRow from '../helper_components/picRow.jsx';
import Details from '../helper_components/details.jsx';

const User = (props) => {
    
  const pics = this.state.userData.photos.slice(0, this.state.displayAmount);

  return (
    <div>
      
      <h1>Hello {this.props.userData.firstName}</h1>
      <h2>Your Places</h2>
      
      { pics.length === 0 ? null :
        <PicRow 
          showHideDetails={ props.showHideDetails } 
          rowType="locations"
          pics={ pics }
          rotatePics={ rotatePics }
          detailedPicURL={ props.detailedPicURL }
        />
      }
      
      <Details 
        detailedPicURL={ props.detailedPicURL }
        pics={ props.userData.photos }
        showHideDetails={ showHideDetails }
        handleStarClick={ handleStarClick }
        userFavorites={ props.userData.likes }
      />
    
    </div>
  )
}

export default User;