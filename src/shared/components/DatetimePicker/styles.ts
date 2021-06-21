import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding-vertical: 40px;
`;

export const DateTimePickerText = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.Neutral700};
  opacity: 0.5;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
`;
