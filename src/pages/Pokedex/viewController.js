/* eslint-disable no-use-before-define */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PokedexView from './view';
import { Creators as SharedActions } from '~/store/ducks/shared';
import PokedexViewModel from './viewModel';

const PokedexViewController = ({ viewModel }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const store = useSelector((state) => state);
  const [pokemonList, setPokemonList] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    searchPokemon(store?.shared?.searchWord);
  }, []);

  const searchPlaceholder = 'Nome do pokemon';

  async function changeSeachWord(word) {
    setSearching(true);
    dispatch(SharedActions.setSearchWord(word));
    await searchPokemon(word);
    setSearching(false);
  }

  async function searchPokemon(word) {
    try {
      await setPokemonList(await viewModel.searchPokemon({ name: word }));
    } catch (exc) {
      // call a exception screen
    }
  }

  function done() {
    Keyboard.dismiss();
  }

  function openPokemon(pokemon) {
    navigation.navigate('Pokemon', { pokemon });
  }

  const searchController = {
    searchWord: store?.shared?.searchWord,
    placeholder: searchPlaceholder,
    searching,
    changeSearchWord: changeSeachWord,
    submit: done,
  };

  return (
    <PokedexView
      searchController={searchController}
      pokemonList={pokemonList}
      openPokemon={openPokemon}
    />
  );
};

PokedexViewController.options = {
  title: 'POKEDEX',
  headerBackTitle: 'Inicio',
  headerStyle: { shadowColor: 'transparent', elevation: 0 },
};

PokedexViewController.propTypes = {
  viewModel: PropTypes.instanceOf(PokedexViewModel).isRequired,
};

export default PokedexViewController;
