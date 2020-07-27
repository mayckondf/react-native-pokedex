/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-expressions */

import React, { useEffect } from 'react';
import { Modal, UIManager, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  ButtonClose,
  InfoWrapper,
  ButtonText,
  AttackTitle,
  LineInfo,
  InfoTitle,
  InfoValue,
  Info,
  Space,
} from './styles';
import { KeyboardAV } from '~/styles/styles';

const PokemonAttackModal = ({ modalVisible, attack, hideModal }) => {
  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
  }, []);

  function closeModal() {
    hideModal();
  }

  return (
    <Modal
      statusBarTranslucent
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <Container>
        <KeyboardAV>
          <Space />
          <Content>
            <InfoWrapper>
              <AttackTitle>{attack?.name}</AttackTitle>
              <LineInfo>
                <InfoTitle>Dano: </InfoTitle>
                <InfoValue>{attack?.damage}</InfoValue>
              </LineInfo>
              <LineInfo>
                <InfoTitle>Custo de Mana: </InfoTitle>
                <InfoValue>{attack?.convertedEnergyCost}</InfoValue>
              </LineInfo>
              <LineInfo>
                <InfoTitle>Tipos: </InfoTitle>
                <InfoValue>
                  {attack?.cost ? attack?.cost?.join(', ') : ''}
                </InfoValue>
              </LineInfo>
              <Info>
                <InfoTitle>Descrição: </InfoTitle>
                <InfoValue>{attack?.text}</InfoValue>
              </Info>
            </InfoWrapper>
            <ButtonClose onPress={closeModal}>
              <ButtonText>Fechar</ButtonText>
            </ButtonClose>
          </Content>
        </KeyboardAV>
      </Container>
    </Modal>
  );
};

PokemonAttackModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  attack: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cost: PropTypes.array.isRequired,
    damage: PropTypes.string.isRequired,
    convertedEnergyCost: PropTypes.number.isRequired,
  }),
  hideModal: PropTypes.func.isRequired,
};

PokemonAttackModal.defaultProps = {
  attack: {
    name: 'Carregando',
    text: 'No Description',
    damage: '---',
    cost: [],
    convertedEnergyCost: 0,
  },
};

export default PokemonAttackModal;
