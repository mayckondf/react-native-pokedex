import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ViewMain from './view';
import { Creators as SharedActions } from '~/store/ducks/shared';

const MainViewController = ({ navigation }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const title = 'Esta procurando por algum pokemon?';
  const extraContentTitle = 'Abertos Recentemente';
  const searchPlaceholder = 'Nome do pokemon';
  const noRecentPokemon = 'Você ainda não abriu nenhum pokemon';

  function openPokedex() {
    navigation.navigate('Pokedex');
  }

  function openPokemon(pokemon) {
    navigation.navigate('Pokemon', { pokemon });
  }

  function openTypes() {}
  function openSubTypes() {}

  function changeSeachWord(word) {
    dispatch(SharedActions.setSearchWord(word));
  }

  function searchPokemon() {
    navigation.navigate('Pokedex');
  }

  const buttons = [
    { title: 'Pokedex', action: openPokedex },
    { title: 'Tipos', action: openTypes },
    { title: 'Sub Tipos', action: openSubTypes },
  ];

  const searchController = {
    searchWord: store?.shared?.searchWord,
    placeholder: searchPlaceholder,
    searching: false,
    changeSearchWord: changeSeachWord,
    submit: searchPokemon,
  };

  return (
    <ViewMain
      title={title}
      searchController={searchController}
      buttons={buttons}
      extraContentTitle={extraContentTitle}
      recents={store?.pokedex?.recents}
      noRecentPokemon={noRecentPokemon}
      openPokemon={openPokemon}
    />
  );
};

MainViewController.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

MainViewController.options = {
  headerShown: false, // remover o header padrão
};

export default MainViewController;
