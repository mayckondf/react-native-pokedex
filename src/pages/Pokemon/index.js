/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PokemonViewController from './viewController';

const Pokemon = () => {
  return <PokemonViewController />;
};

Pokemon.options = PokemonViewController.options;

export default Pokemon;
