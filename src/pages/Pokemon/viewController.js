/* eslint-disable react/forbid-prop-types */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import PokemonView from './view';
import PokemonAttackModal from '~/components/PokemonAttackModal';
import { Creators as PokedexActions } from '~/store/ducks/pokedex';

const PokemonViewController = () => {
  const dispatch = useDispatch();
  const route = useRoute();

  const pokemon = route.params?.pokemon;

  useEffect(() => {
    dispatch(PokedexActions.addIntoRecents(pokemon));
  }, []);

  const [selectedAttack, setSelectedAttack] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const types = pokemon.types
    ? pokemon.types.map((type) => ({ text: type }))
    : [];
  const weaknesses = pokemon.weaknesses
    ? pokemon.weaknesses.map((weakness) => ({
        text: `${weakness.type} (${weakness.value})`,
      }))
    : [];
  const attacks = pokemon.attacks
    ? pokemon.attacks.map((attack) => ({ text: attack.name }))
    : [];

  function openAttack(atackIndex) {
    setSelectedAttack(pokemon.attacks[atackIndex]);
    setModalVisible(true);
  }

  function hideModalAttack() {
    setModalVisible(false);
  }

  const infoList = [
    { title: 'ID', description: pokemon.id },
    { title: 'Tipos', descriptions: types, type: 'composed' },
    { title: 'Fraquezas', descriptions: weaknesses, type: 'composed' },
    {
      title: 'Ataques',
      descriptions: attacks,
      type: 'composed',
      action: openAttack,
    },
  ];

  return (
    <>
      <PokemonAttackModal
        modalVisible={modalVisible}
        attack={selectedAttack}
        hideModal={hideModalAttack}
      />
      <PokemonView pokemon={pokemon} infoList={infoList} />
    </>
  );
};

PokemonViewController.options = ({ route }) => ({
  title: `${route.params?.pokemon?.name ?? 'Pokemon'}`,
  headerBackTitle: 'Voltar',
});

export default PokemonViewController;
