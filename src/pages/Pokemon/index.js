/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import PokemonViewController from './viewController';

const Pokemon = ({ navigation, route }) => {
  return <PokemonViewController navigation={navigation} route={route} />;
};

Pokemon.options = PokemonViewController.options;

Pokemon.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default Pokemon;
