import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import ActionButton from '../../../../shared/components/ActionButton';

export const Container = styled.View`
  justify-content: center;
  padding: 0 20px 100px;
  position: relative;
  /* margin-bottom: 200px; */
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: ${RFValue(50)}px;
`;

export const PowerButton = styled.TouchableOpacity`
  margin-top: -25px;
  align-self: flex-end;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin: 32px;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(186)}px;
  height: ${RFValue(186)}px;
  border-radius: ${RFValue(98)}px;
  align-self: center;
`;

export const ConfirmChangeButton = styled(ActionButton)`
  margin-top: 60px;
`;
