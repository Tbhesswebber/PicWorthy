import React, { Component } from 'react';
import {FaStarO, FaStar, FaFacebookSquare, FaTwitter, FaYelp, FaInstagram} from 'react-icons/lib/fa';


// const getPic = (url, pics) => {
//   for (const pic of pics) {
//     if (pic.imageURL === url) {
//       return pic;
//     }
//   }
//   return 'NOT_FOUND';
// }

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

const checkFavorites = (userFavorites, img) => userFavorites.includes(img);


export default class Details extends Component {

  scrollToBottom() {
    // not sure if I like this scroll down
    // this.scrollEnd.scrollIntoView({behavior: 'smooth'});
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.detailedPicURL === 'NONE' && this.props.detailedPicURL !== 'NONE') {
      this.scrollToBottom();
    }
  }

  render() {
    
    const { detailedPicURL, pics, userFavorites, showHideDetails, handleStarClick } = this.props 

    let pic = getPic(detailedPicURL, pics);

    if (pic === 'NOT_FOUND') {
      return <div />;
    }

    const isStarred = checkFavorites(userFavorites.map((p) => p.imageURL), pic.imageURL)


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
              {/*
              <FaInstagram 
                style={ iconStyle}  
                size={ 30 } 
              />
              <FaFacebookSquare 
                style={ iconStyle } 
                size={ 30 } 
              /> 
              <FaTwitter 
                style={ iconStyle } 
                size={ 30 } 
              />
              <FaYelp 
                style={ iconStyle } 
                size={ 30 } 
              />
              */}

        </div>
        
        <div 
          ref={ (el) => this.scrollEnd = el  }
        />
      </div>
    )
  }
};


