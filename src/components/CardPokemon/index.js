import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  CardWrapper,
  Card,
  LoadingWrapper,
  Loading,
} from './styles';

const CardPokemon = ({ pokemon, action }) => {
  return (
    <Container onPress={() => action(pokemon)}>
      <CardWrapper>
        <Card
          source={{
            uri: pokemon?.imageUrl,
          }}
          resizeMode="stretch"
        />
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      </CardWrapper>
    </Container>
  );
};

CardPokemon.propTypes = {
  pokemon: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.func.isRequired,
};

export default CardPokemon;

/*
{ item:
   { id: 'base4-117',
     name: 'Super Potion',
     imageUrl: 'https://images.pokemontcg.io/base4/117.png',
     imageUrlHiRes: 'https://images.pokemontcg.io/base4/117_hires.png',
     supertype: 'Trainer',
     subtype: '',
     number: '117',
     artist: 'Keiji Kinebuchi',
     rarity: 'Uncommon',
     series: 'Base',
     set: 'Base Set 2',
     setCode: 'base4',
     text: [ 'Discard 1 Energy card attached to 1 of your own Pokémon in order to remove up to 4 damage counters from that Pokémon.' ] },
  index: 98,
  separators:
   { highlight: [Function: highlight],
     unhighlight: [Function: unhighlight],
     updateProps: [Function: updateProps] } }
*/
