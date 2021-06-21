import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFValue(167)}px;
  height: 100%;
  background: ${({ theme }) => theme.colors.DarkerBlue};
  height: ${RFValue(205)}px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ProviderAvatar = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(117)}px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const ContentWrapper = styled.View``;
export const ProviderName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  /* font-size: ${RFValue(22)}px; */
  line-height: ${RFValue(11)}px;
`;
export const AvailablePeriodWrapper = styled.Text``;

export const AvailablePeriod = styled.Text``;
export const AvailableTimeWrapper = styled.Text``;
export const AvailableTime = styled.Text``;
