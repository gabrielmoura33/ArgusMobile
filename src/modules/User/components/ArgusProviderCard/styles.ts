import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
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

export const ContentWrapper = styled.View`
  padding: 6% 0 0 5%;
`;
export const ProviderName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.Neutral100};
`;
export const AvailablePeriodWrapper = styled.View`
  margin-top: ${RFValue(5)}px;
  flex-direction: row;
  align-items: flex-end;
`;

export const AvailablePeriod = styled.Text`
  margin-left: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-size: ${RFValue(8)}px;
  line-height: ${RFValue(9)}px;
  color: ${({ theme }) => theme.colors.Neutral400};
`;
export const AvailableTimeWrapper = styled.View`
  margin-top: ${RFValue(5)}px;
  flex-direction: row;
  align-items: flex-end;
`;
export const AvailableTime = styled.Text`
  margin-left: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-size: ${RFValue(8)}px;
  line-height: ${RFValue(9)}px;
  color: ${({ theme }) => theme.colors.Neutral400};
`;
