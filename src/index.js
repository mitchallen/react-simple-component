/*
    Module: @mitchallen/react-simple-component
    Author: Mitch Allen
*/

import React from 'react';
// import PropTypes from 'prop-types';

class SimpleComponent extends React.Component {
  render() {
    return (
    	<div>
      		<div>Package: @mitchallen/react-simple-component</div>
      		<div>Component: SimpleComponent</div>
      	</div>
    );
  }
}

// SimpleComponent.propTypes = {
//   // someProp: PropTypes.isRequired,
// };

export default SimpleComponent;