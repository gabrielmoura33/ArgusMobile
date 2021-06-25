import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)``;
export const CategoryBackground = styled.ImageBackground`
  margin-top: ${RFValue(19)}px;
  width: ${RFValue(165)}px;
  height: ${RFValue(137)}px;

  margin-right: ${RFValue(10)}px;
  justify-content: flex-end;
  padding: 0 ${RFValue(10)}px ${RFValue(8)}px 0;
`;
export const CategoryComponentLabel = styled.Text`
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(22)}px;
  color: rgba(255, 255, 255, 0.73);
`;
