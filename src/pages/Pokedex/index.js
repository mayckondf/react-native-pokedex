import React from 'react';
import PropTypes from 'prop-types';
import PokedexViewController from './viewController';
import PokedexViewModel from './viewModel';

const Pokedex = ({ navigation }) => {
  const pokedexViewModel = new PokedexViewModel();

  return (
    <PokedexViewController
      viewModel={pokedexViewModel}
      navigation={navigation}
    />
  );
};

Pokedex.options = PokedexViewController.options;

Pokedex.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Pokedex;
