import { TextInput } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;
export const Input = styled(TextInput)`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.Neutral100};
  margin-bottom: 8px;
  border-bottom-width: 1px;
  opacity: 0.5;

  border-bottom-color: ${({ theme }) => theme.colors.Neutral700};
`;
