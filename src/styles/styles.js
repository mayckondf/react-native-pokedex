import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

export const StyledSafeAreaView = styled.View`
  ${Platform.select({
    android: css`
      margin-top: 25;
    `,
  })}
  flex: 1;
`;

export const KeyboardAV = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
`;
