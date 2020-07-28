import React from 'react';
import PokedexViewController from './viewController';
import PokedexViewModel from './viewModel';

const Pokedex = () => {
  const pokedexViewModel = new PokedexViewModel();

  return <PokedexViewController viewModel={pokedexViewModel} />;
};

Pokedex.options = PokedexViewController.options;

export default Pokedex;
