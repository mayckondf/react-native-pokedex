/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PokeballWrapper,
  Pokeball,
  ScrollView,
  MainContent,
  Title,
  ButtonWrapper,
  Complement,
  ExtraContent,
  CardWrapper,
  Card,
  ExtraContentTitle,
  DialogWrapper,
  DialogText,
  Touchable,
} from './styles';
import AutoCompleteInput from '~/components/AutoCompleteInput';
import Button from '~/components/PokeButton';
import RotationView from '~/components/RotationAnimatedView';
import { KeyboardAV } from '~/styles/styles';

const MainView = (props) => {
  const {
    title,
    extraContentTitle,
    searchController,
    buttons,
    recents,
    noRecentPokemon,
    openPokemon,
  } = props;
  return (
    <Container>
      <KeyboardAV>
        <ScrollView bounces={false}>
          <PokeballWrapper>
            <RotationView>
              <Pokeball />
            </RotationView>
          </PokeballWrapper>
          <MainContent>
            <Title>{title}</Title>
            <AutoCompleteInput searchController={searchController} />
            <ButtonWrapper>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  index={index}
                  title={button.title}
                  action={button.action}
                />
              ))}
            </ButtonWrapper>
          </MainContent>
          <ExtraContent>
            <Complement />
            <ExtraContentTitle>{extraContentTitle}</ExtraContentTitle>
            <CardWrapper>
              {recents.length >= 1 &&
                recents.map((pokemon) => (
                  <Touchable
                    onPress={() => openPokemon(pokemon)}
                    key={pokemon.name}
                  >
                    <Card source={{ uri: pokemon.imageUrl }} />
                  </Touchable>
                ))}
            </CardWrapper>
            {recents.length === 0 && (
              <DialogWrapper>
                <DialogText>{noRecentPokemon}</DialogText>
              </DialogWrapper>
            )}
          </ExtraContent>
        </ScrollView>
      </KeyboardAV>
    </Container>
  );
};

MainView.propTypes = {
  title: PropTypes.string.isRequired,
  extraContentTitle: PropTypes.string.isRequired,
  searchController: PropTypes.object.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
  recents: PropTypes.array.isRequired,
  openPokemon: PropTypes.func.isRequired,
  noRecentPokemon: PropTypes.string.isRequired,
};

export default memo(MainView);
