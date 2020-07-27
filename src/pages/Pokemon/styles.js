import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f2f2f2;
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})`
  background: #fff;
  flex: 1;
`;

export const CardWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Card = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 500px;
  width: 340px;
`;

export const TitleInfo = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const DescriptionInfo = styled.Text`
  font-size: 15px;
`;
