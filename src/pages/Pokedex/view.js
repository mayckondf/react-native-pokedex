/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, SafeAreaView, FlatList } from './styles';
import Header from '~/components/Header';
import CardPokemon from '~/components/CardPokemon';
import { KeyboardAV } from '~/styles/styles';

const PokedexView = ({ searchController, pokemonList, openPokemon }) => {
  return (
    <Container>
      <KeyboardAV>
        <SafeAreaView>
          <Content>
            <Header searchController={searchController} />
            <FlatList
              data={pokemonList}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={(pokemon) => {
                return (
                  <CardPokemon pokemon={pokemon.item} action={openPokemon} />
                );
              }}
            />
          </Content>
        </SafeAreaView>
      </KeyboardAV>
    </Container>
  );
};

PokedexView.propTypes = {
  searchController: PropTypes.shape({
    searchWord: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    searching: PropTypes.bool.isRequired,
    changeSearchWord: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  }).isRequired,
  pokemonList: PropTypes.array.isRequired,
  openPokemon: PropTypes.func.isRequired,
};

export default PokedexView;
