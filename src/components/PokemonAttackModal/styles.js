import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000000cc;
  justify-content: flex-end;
`;

export const Content = styled.View`
  flex-wrap: wrap;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 50px;
`;

export const InfoWrapper = styled.View``;

export const ButtonClose = styled.TouchableHighlight`
  width: 100%;
  height: 85px;
  background: #d60a2d;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
`;

export const AttackTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
`;

export const LineInfo = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 20px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Info = styled.View`
  padding: 10px;
  margin-bottom: 10px;
`;

export const InfoTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const InfoValue = styled.Text`
  font-size: 16px;
`;

export const Space = styled.View`
  flex: 1;
`;
