import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import WorthyMap from './worthymap.jsx';
import PicRow from './picrow.jsx';
import Details from './details.jsx';
import fetchClosestPics from '../helpers/fetchClosestPics.jsx';
import getUserLocation from '../helpers/getUserLocation.jsx';


// const showHideDetails = function(e, imageURL) {
//   if (e.preventDefault !== undefined) {
//     e.preventDefault();
//   }

//   if (this.state.detailedPicURL === imageURL) {
//     const detailedPicURL = 'NONE';
    
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     })

//     setTimeout(() => this.setState({detailedPicURL}), 322);

//   } else {
//     const detailedPicURL = imageURL;

//     this.setState({
//       detailedPicURL,
//     });
//   }
// }

class Likes extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      displayAmount: 5,
      likes: []
    }
  }
  
  componentDidMount () {
    const pics = this.props.userData.likes.slice(0, this.state.displayAmount);
    this.setState({likes: pics});
  }
  
  perusePics (e) {
    const pics = this.state.likes;
    
    if (e === 1) {
      pics.unshift(pics.pop());
  
    } else if (e === -1) {
      pics.push(pics.shift());
    }
    this.setState({likes: pics});
  }

  render () {
    return (
      <div>
        <div>
        
          <h1>{this.props.userData.firstName}'s Favorites</h1>
        
        </div>
        
        <Details 
          detailedPicURL={ this.state.detailedPicURL }
          pics={ this.state.userData.likes }
          showHideDetails={ this.showHideDetails }
          handleStarClick={ this.handleStarClick }
          userFavorites={ this.state.userData.likes }
        />
        
        <PicRow 
          showHideDetails={ this.showHideDetails } 
          rowType="locations"
          pics={ pics }
          rotatePics={ this.rotatePics }
          detailedPicURL={ this.state.detailedPicURL }
        />
      </div>
    ) 
  
  }
}

export default Likes;

