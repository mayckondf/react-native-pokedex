import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 46%;
  height: 270px;
  border-radius: 5px;
  border: 1px solid #cecece;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;

export const CardWrapper = styled.View`
  flex: 1;
`;

export const Card = styled.Image`
  flex: 1;
  z-index: 5;
`;

export const LoadingWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#c3c3c3',
})``;
