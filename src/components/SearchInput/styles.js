import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  background: #ededed;
  border-radius: 25px;
  z-index: 5;
  border: 1px solid #cecece;
`;

export const IconSearch = styled(Icon).attrs({
  size: 22,
  color: '#000',
})`
  height: 50px;
  width: 50px;
  padding: 14px;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  height: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const ResultWrapper = styled.View`
  top: -25px;
  width: 100%;
  flex: 1;
  flex-direction: column;
  background: #fff;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 1px solid #cecece;
  padding-top: 25px;
`;
