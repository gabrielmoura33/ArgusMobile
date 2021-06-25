import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.Secondary};
  padding: ${RFValue(68)}px ${RFValue(25)}px 0 ${RFValue(25)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: ${RFValue(62)}px;
`;

export const BackButton = styled(BorderlessButton)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  position: absolute;
  top: 20%;
  left: 0;
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.Neutral100};
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};

  font-size: ${RFValue(25)}px;

  color: ${({ theme }) => theme.colors.Neutral100};
`;
