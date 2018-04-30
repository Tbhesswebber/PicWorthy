import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
  <a onClick={props.handleClick}>
    <div className={`card ${props.display}`}>
      <div className="card-content">
          <img 
            src={ props.photo.imageURL }
          />
      </div>
    </div>
  </a>
)

/*
 * We did a bad job at updating and consistently using propTypes
 */

// Card.propTypes = {
//   picDetails: PropTypes.shape({
//     location: PropTypes.string,
//     imageURL: PropTypes.string
//   }).isRequired,
//   showDetails: PropTypes.func.isRequired,
//   selected: PropTypes.func.isRequired
// }

export default Card;