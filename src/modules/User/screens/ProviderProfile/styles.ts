import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import ActionButton from '../../../../shared/components/ActionButton';
import IconButton from '../../../../shared/components/IconButton';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.Secondary};
  flex: 1;
  position: relative;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: ${RFValue(200)}px;
`;

export const Container = styled.View`
  padding: 0 ${RFValue(19)}px;
`;

export const ProviderProfileWrapper = styled.View`
  width: 100%;
  height: ${RFValue(147)}px;
  margin-top: -20%;
`;

export const ServicesWrapper = styled.View`
  margin-top: ${RFValue(22)}px;
`;

export const ServiceListWrapper = styled.View`
  height: 65%;
`;

export const ServiceLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoBold};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.Neutral100};
`;

export const ServiceCardWrapper = styled.View`
  margin-top: 5%;
  width: 100%;
  height: 116px;
`;

export const ActionButtonCustom = styled(ActionButton)`
  width: 80%;
`;

export const IconButtonCustom = styled(IconButton)`
  width: ${RFValue(50)}px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 0 5px;
`;
