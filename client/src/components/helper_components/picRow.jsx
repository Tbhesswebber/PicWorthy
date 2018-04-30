import React from 'react';
import PropTypes from 'prop-types';
import {FaChevronRight, FaChevronLeft} from 'react-icons/lib/fa';

import Card from './card.jsx';


const PicRow = (props) => {
  const photos = props.photos.slice(0);
  console.log(photos);
  return (
      <div className={`pic-row ${props.mainClass}`}>
        {/* <div className="pic-row-title">
          <h1>{props.title}</h1>
        </div> */}
        <div className="pic-row-content">
          <a className="pic-row-chevron-left">
            <FaChevronLeft
              className="left-chevron"
              onClick={() => this.advanceImage(props.photos)}              
            />
          </a>
          <div className="pic-row-images">
            {props.photos.map((photo, index) => 
              <Card key={index} photo={photo} display={index < props.renderCount ? "show" : "hide"} />
            )}
          </div>
          <a className="pic-row-chevron-right">
              <FaChevronRight
                className="right-chevron"
                onClick={() => this.retreatImage(props.photos)}
              />
          </a>
        </div>
      </div>
  );
}

PicRow.propTypes = {
  mainClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  renderCount: PropTypes.number.isRequired
};

export default PicRow;