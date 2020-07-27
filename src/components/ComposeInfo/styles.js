import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  width: 100%;
  padding: 5px 5px 5px 10px;

  border-top-color: #cecece;
  border-top-width: 1px;
`;

export const TitleLine = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const TextLine = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 15px;
  ${(props) =>
    props.action
      ? css`
          text-decoration-line: underline;
        `
      : undefined}
  color: ${(props) => (props.action ? '#0646AD' : '#000')};
`;

export const MultiLineIcon = styled(Icon).attrs((props) => ({
  size: 22,
  color: props.action ? '#0646AD' : '#000',
}))`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;
