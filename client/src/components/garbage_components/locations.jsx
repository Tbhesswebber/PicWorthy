import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';

import WorthyMap from './worthymap.jsx';
import PicRow from './picrow.jsx';
import Details from './details.jsx';
import fetchClosestPics from '../helpers/fetchClosestPics.jsx';
import getUserLocation from '../helpers/getUserLocation.jsx';

/*
 * The locations, userpage, and likes page all get rendered with the locations component
 * 
 */



 /*
  * showHideDetails
  * toggles the details on and off.  It uses a set timeout so that the page smoothly
  * moves up before eliminating the div with the details.  In the likes component
  * is a commented out function that makes it smoothly move down too that
  * we couldn't decide on which we liked better.
  *  
  */

const showHideDetails = function(e, imageURL) {
  if (e.preventDefault !== undefined) {
    e.preventDefault();
  }

  if (this.state.detailedPicURL === imageURL) {
    const detailedPicURL = 'NONE';
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    setTimeout(() => this.setState({detailedPicURL}), 322);

  } else {
    /* this reg ex is a
     * last minute hack to eliminate bug. 
     * The user and likes page were pretty last minute so they could both be made to itegrate
     * with this component cleaner.
     * 
     */

    if (/^\/locations/.test(this.props.pathname)) {
      const detailedPicURL = imageURL;
      const coordinates = this.state.pics.filter(pic => pic.imageURL === imageURL)[0].loc.coordinates;
      const position = {
        lat: coordinates[1],
        lng: coordinates[0]
      }
      
      this.setState({
        detailedPicURL,
        position,
        zoom: 10
      });
    
    } else{
      const detailedPicURL = imageURL;
      this.setState({
        detailedPicURL,
      });
    }
    
  }
}

/*
 * implements the feature to toggle row component left and right
 */

const rotatePicsLocation = function(e, direction) {
  e.preventDefault();

  let pics = [...this.state.pics];
  
  if (direction === 'LEFT') {
    pics.unshift(pics.pop());

  } else if (direction === 'RIGHT') {
    pics.push(pics.shift());
  }

  this.setState({pics});
}

/*
 * these are seperate functions to get ready to present fast.  Would have refactored if time.
 */

const rotatePicsUserpage = function(e, direction) {
  
  e.preventDefault();
  
  let userData = Object.assign({}, this.state.userData);
  let pics = [...userData.photos];
  
  if (direction === 'LEFT') {
    pics.unshift(pics.pop());

  } else if (direction === 'RIGHT') {
    pics.push(pics.shift());
  }
  
  userData = Object.assign({}, userData, {photos: pics});
  this.setState({userData});
}

const rotatePicsLikes = function(e, direction) {
  e.preventDefault();

  let userData = Object.assign({}, this.state.userData);
  let pics = [...userData.likes];
  
  if (direction === 'LEFT') {
    pics.unshift(pics.pop());

  } else if (direction === 'RIGHT') {
    pics.push(pics.shift());
  }
  
  userData = Object.assign({}, userData, {likes: pics});
  this.setState({userData});
}







