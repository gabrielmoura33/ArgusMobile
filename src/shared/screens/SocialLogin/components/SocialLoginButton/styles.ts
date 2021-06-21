import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
  visible: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: ${RFValue(77)}px;
  height: ${RFValue(77)}px;
  background-color: ${({ color }) => color};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
`;
