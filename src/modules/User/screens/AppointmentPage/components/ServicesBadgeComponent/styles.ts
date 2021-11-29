import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ContainerProps {
  isActive: boolean;
}
export const Container = styled(RectButton)<ContainerProps>`
  width: 70px;
  height: 95px;
  background: ${props => (props.isActive ? '#E06714' : '#262A34')};
  align-items: center;
  justify-content: center;
  border-radius: 9px;
`;

export const Title = styled.Text`
  margin-top: 5%;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  color: ${({ theme }) => theme.colors.Neutral100};
  font-size: 7px;
  line-height: 9px;
  text-align: center;
`;
export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  color: ${({ theme }) => theme.colors.Neutral100};
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  margin-top: 30%;
`;
