import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: ${({ theme }) => theme.colors.Secondary};
  padding: ${RFPercentage(2)}% ${RFValue(20.4)}px;
`;
