import styled from 'styled-components/native';

export const Container = styled.View`
  background: white;
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})`
  flex: 1;
  background: #f2f2f2;
`;
