/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, ScrollView, CardWrapper, Card } from './styles';
import SimpleInfo from '~/components/SimpleInfo';
import ComposeInfo from '~/components/ComposeInfo';

const PokemonView = ({ pokemon, infoList }) => {
  return (
    <Container>
      <ScrollView>
        <CardWrapper>
          <Card source={{ uri: pokemon.imageUrlHiRes }} />
        </CardWrapper>
        {infoList.map((info, index) => {
          if (info.type === 'composed' && info.descriptions.length >= 1) {
            return <ComposeInfo info={info} key={index} />;
          }
          return <SimpleInfo info={info} key={index} />;
        })}
      </ScrollView>
    </Container>
  );
};

PokemonView.propTypes = {
  pokemon: PropTypes.object.isRequired,
  infoList: PropTypes.array.isRequired,
};

export default PokemonView;
