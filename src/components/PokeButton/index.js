import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PokeballWrapper,
  ButtonText,
  TextContainer,
} from './styles';
import Pokeball from '../Pokeball';

const PokeButton = ({ title, index, action }) => {
  return (
    <Container index={index} onPress={action}>
      <PokeballWrapper>
        <Pokeball color="#FFF" opacity={0.4} />
      </PokeballWrapper>
      <TextContainer>
        <ButtonText>{title}</ButtonText>
      </TextContainer>
    </Container>
  );
};

PokeButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default PokeButton;
