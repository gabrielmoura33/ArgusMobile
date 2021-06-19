import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: ${RFValue(158)}px;
  width: 60%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const Title = styled.Text`
  margin-top: ${RFPercentage(1)}%;
  font-weight: bold;
  font-size: ${RFValue(18)}px;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.Neutral100};
`;
