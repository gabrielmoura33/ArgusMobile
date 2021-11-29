import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.DarkerBlue};
  border-radius: ${RFValue(24)}px;
  flex-direction: row;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProviderAvatar = styled.Image`
  width: 44%;
  height: 100%;
`;
export const ContentContainer = styled.View`
  padding: 2% 0 3% 3%;
  justify-content: space-between;
`;
export const ProviderInfoWrapper = styled.View`
  flex-direction: column;
`;
export const CategoryTitle = styled.Text`
  color: #999999;
  font-family: ${props => props.theme.fonts.RobotoMedium};
  font-size: 15px;
  line-height: ${RFValue(17)}px;
`;
export const ProviderName = styled.Text`
  color: ${props => props.theme.colors.Neutral100};
  font-family: ${props => props.theme.fonts.RobotoMedium};
  font-size: ${RFValue(22)}px;
`;
export const ProviderInfoFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatisticsWrapper = styled.View`
  align-items: center;
  margin-right: ${RFValue(20)}px;
`;

export const Label = styled.Text`
  margin-top: 15%;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-size: ${RFValue(14)}px;

  color: ${props => props.theme.colors.primary};
`;

export const Legend = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-size: ${RFValue(9)}px;

  color: ${props => props.theme.colors.Neutral100};
`;
