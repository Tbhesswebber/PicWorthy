import React, { Component } from 'react';
import { FaStarO, FaStar } from 'react-icons/lib/fa';



const DisplayStar = ({ pic, handleStarClick, isStarred }) => {
  if (isStarred) {
    return (
      <FaStar 
        style={ iconStyle } 
        size={ 40 }
      />
    )
    
  } else {
    return (
      <FaStarO
        style={ iconStyle } 
        size={ 40 } 
        onClick={ (e) => handleStarClick(e, pic) } 
      /> 
    );
  }
}



class PicDetails extends Component {
  constructor (props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  checkFavorites (userFavorites, img) { userFavorites.includes(img) };
  
  render() {
    
    const { photos, likes } = this.props.userData

    const isStarred = this.checkFavorites(userFavorites.map((p) => p.imageURL), pic.imageURL)


    return (
      <div>
        <div>        
              <h1 style={ {fontFamily: `billabong`} }>
                {pic.location }
              </h1>
        
              <h4>
                Submitted by: { pic.username }
              </h4>
        
              <p>
                { pic.description } 
              </p>
              <DisplayStar
                pic={ pic }
                handleStarClick={ handleStarClick }
                isStarred={ isStarred }
              />

        </div>
      </div>
    )
  }
};

export default PicDetails;