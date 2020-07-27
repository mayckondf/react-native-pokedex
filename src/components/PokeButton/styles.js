import styled from 'styled-components/native';
import { getColor } from '~/styles/colors';

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 70px;
  border-radius: 15px;
  margin-bottom: 20px;
  background: ${(props) => getColor(props.index || 0)};
`;

export const PokeballWrapper = styled.View`
  width: 80px;
  height: 80px;
  left: 60%;
  top: -5px;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  position: absolute;
  width: 48%;
  height: 70px;
  border-radius: 15px;
  justify-content: center;
`;

export const ButtonText = styled.Text.attrs({
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 1,
})`
  color: white;
  width: 100%;
  margin: 10px;
  font-weight: bold;
`;
