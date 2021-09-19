import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.DarkerBlue};
  border-radius: 7px;
  flex-direction: row;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ServiceImage = styled.Image`
  width: 35%;
  height: 100%;
`;
export const ContentContainer = styled.View`
  padding: 2% 0 3% 3%;
  justify-content: space-between;
`;
export const ProviderInfoWrapper = styled.View`
  flex-direction: column;
`;
export const JobDescription = styled.Text.attrs({
  numberOfLines: 4,
})`
  color: #999999;
  font-family: ${props => props.theme.fonts.RobotoMedium};
  font-size: 12px;
  /* width: ${RFValue(180)}px; */
  width: 17%;
  text-align: justify;
  margin-top: 1%;

  /* line-height: ${RFValue(17)}px; */
`;
export const ProviderName = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(14)}px;
`;
export const ProviderInfoFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatisticsWrapper = styled.View`
  align-items: center;
  margin-right: ${RFValue(20)}px;
`;
