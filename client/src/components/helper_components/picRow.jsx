import React from 'react';
import PropTypes from 'prop-types';
import {FaChevronRight, FaChevronLeft} from 'react-icons/lib/fa';

import Card from './card.jsx';


const PicRow = (props) => {
  return (
    <div className="bottom-third fullw" >
      <div className="pic-row">
        <div className="pic-row-title">
          <h1>{props.title}</h1>
        </div>
        <div className="pic-row-content">
          <a className="pic-row-chevron-left chevron chevron-left">
            <FaChevronLeft
              className="left-chevron"
              onClick={() => this.advanceImage(this.state.images)}              
            />
          </a>
          <div className="pic-row-images">
            <Card photo={props.photos[0]} />
          </div>
          <a className="pic-row-chevron-right chevron chevron-right">
              <FaChevronRight
                className="right-chevron"
                onClick={() => this.retreatImage(this.state.images)}
              />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PicRow;