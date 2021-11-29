import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import ActionButton from '../../ActionButton';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.54);
`;

export const ModalContent = styled.View`
  width: 75%;
  height: 254px;
  background: ${({ theme }) => theme.colors.DarkerBlue};
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border-radius: 20px;
`;
export const ModalHeader = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  margin-top: 20px;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  text-align: center;

  color: #ffffff;
`;

export const ConfirmationWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
export const CustomActionButton = styled(ActionButton)`
  width: 40%;
`;
