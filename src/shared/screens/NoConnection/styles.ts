import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.Secondary};
`;

export const Wifi = styled.View`
  align-items: center;
`;

export const WifiIcon = styled(Feather)`
  margin-bottom: 20px;
  opacity: 0.9;
`;

export const WifiText = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.Neutral100};
  text-align: center;
  padding: 10px 15px;
  font-family: ${({ theme }) => theme.fonts.RobotoBold};
  opacity: 0.9;
`;

export const WifiTextSmall = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.Neutral100};
  opacity: 0.5;
`;
