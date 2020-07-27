import styled from 'styled-components/native';
import PokeballComp from '~/components/Pokeball';

export const Container = styled.View`
  flex: 1;
`;

export const PokeballWrapper = styled.View`
  position: absolute;
  width: 256px;
  height: 256px;
  right: -64px;
  top: -64px;
`;

export const Pokeball = styled(PokeballComp)``;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 100,
    flexGrow: 1,
  },
})`
  background: #fff;
  flex: 1;
`;

export const MainContent = styled.View`
  padding: 0px 25px 0px 25px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ExtraContent = styled.View`
  flex: 1;
  background: #dedede;
`;

export const Complement = styled.View`
  height: 30px;
  background: #fff;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-bottom: 20px;
`;

export const CardWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Card = styled.Image`
  height: 155px;
  width: 110px;
  margin: 5px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  resize-mode: stretch;
`;

export const ExtraContentTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 20px 10px 20px;
`;

export const DialogWrapper = styled.View`
  margin: 20px;
  background: #fff;
  flex: 1;
  max-height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Touchable = styled.TouchableOpacity``;

export const DialogText = styled.Text``;
