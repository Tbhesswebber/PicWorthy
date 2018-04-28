import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className="card">
        <img 
          src={ props.picDetails.imageURL }
        />
  </div>
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