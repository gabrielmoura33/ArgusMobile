import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.DarkerBlue};
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
`;

export const ProviderAvatar = styled.Image`
  width: 44%;
  height: 100%;
`;
export const ContentContainer = styled.View`
  padding: 5% 0 5% 3%;
  justify-content: space-between;
`;
export const ProviderInfoWrapper = styled.View`
  flex-direction: column;
`;
export const CategoryTitle = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.RobotoMedium};
  font-size: 10px;
  line-height: ${RFValue(17)}px;
`;
export const ProviderName = styled.Text`
  color: ${props => props.theme.colors.Neutral100};
  font-family: ${props => props.theme.fonts.RobotoMedium};
  font-size: 14px;
  line-height: 17px;
`;
export const ProviderInfoFooter = styled.View``;
export const AvailablePeriodWrapper = styled.View`
  margin-top: ${RFValue(5)}px;
  flex-direction: row;
  align-items: flex-end;
`;

export const AvailablePeriod = styled.Text`
  margin-left: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(8)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.Neutral400};
`;
export const AvailableTimeWrapper = styled.View`
  margin-top: ${RFValue(5)}px;
  flex-direction: row;
  align-items: flex-end;
`;
export const AvailableTime = styled.Text`
  margin-left: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(8)}px;
  line-height: ${RFValue(9)}px;
  color: ${({ theme }) => theme.colors.Neutral400};
`;
