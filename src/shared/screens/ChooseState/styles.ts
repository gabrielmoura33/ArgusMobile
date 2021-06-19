import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import LogoOrangeSvg from '../../../assets/company/logo-orange.svg';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.Secondary};
  flex: 1;
  align-items: center;
`;

export const Logo = styled(LogoOrangeSvg)`
  margin: ${RFPercentage(2)}% 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(24)}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.Neutral100};
`;
