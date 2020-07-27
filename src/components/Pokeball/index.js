import React from 'react';
import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';

function Pokeball({ opacity, color }) {
  const xml = `
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path
      id="pokeball"
      fill="${color}"
      opacity="${opacity}"
      d="M166,128c0,21-17,38-38,38s-38-17-38-38s17-38,38-38S166,107,166,128L166,128z M128-0.9
      C62.1-0.9,7.8,48.4,0,112.2h69.3c7-25.9,30.6-44.9,58.7-44.9s51.8,19.1,58.7,44.9H256C248.2,48.4,193.8-0.9,128-0.9z M0,143.8
      c7.8,63.7,62.1,113.1,128,113.1s120.2-49.4,128-113.1h-69.3c-7,25.9-30.6,44.9-58.7,44.9s-51.7-19.1-58.7-44.9
      C69.3,143.8,0,143.8,0,143.8z" />
  </svg>
  `;

  return <SvgXml xml={xml} />;
}

Pokeball.defaultProps = {
  opacity: 1,
  color: '#ededed',
};

Pokeball.propTypes = {
  opacity: PropTypes.number,
  color: PropTypes.string,
};

export default Pokeball;
