import React from 'react';
import PropTypes from 'prop-types';
import {FaChevronRight, FaChevronLeft} from 'react-icons/lib/fa';

import Card from './card.jsx';


const PicRow = ({ pics, rotatePics,showHideDetails, detailedPicURL }) => {    
  return (
    <div className="pic-row fullw" >
      <a href='#'><FaChevronLeft
        onClick={(e) => rotatePics(e, 'LEFT')} 
      /></a>
      
      { props.pics.map((pic, key) => (<Card key={key} pic={pic} />)) }
      
      <a href='#'><FaChevronRight
        onClick={(e) => rotatePics(e, 'RIGHT')}
      /></a>
    </div>
  );
}

export default PicRow;