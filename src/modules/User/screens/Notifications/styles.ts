import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.Secondary};
`;
export const Container = styled.View`
  padding: 0 ${RFValue(25)}px 0 0;
  flex-direction: row;
`;
