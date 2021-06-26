import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import ActionButton from '../../../../shared/components/ActionButton';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${RFPercentage(2)}%;
`;
export const Logo = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(100)}px;
  align-self: center;
  margin-bottom: ${RFPercentage(1)}%;
`;
export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DarkBackground};
  border-top-left-radius: ${RFValue(80)}px;
  border-top-right-radius: ${RFValue(80)}px;
  box-shadow: 0px -4px 26px rgba(0, 0, 0, 0.25);
  padding: ${RFValue(35)}px ${RFValue(33)}px;
`;
export const WelcomeText = styled.Text`
  margin: 0 0 ${RFValue(20)}px 0;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  font-size: ${RFValue(35)}px;
  line-height: ${RFValue(46)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.Neutral100};
`;
export const Button = styled(ActionButton)`
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.Neutral100};
  font-family: ${({ theme }) => theme.fonts.GothamBook};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(46)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.Neutral100};
`;
