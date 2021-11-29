import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ContainerProps {
  isActive?: boolean;
}
export const Container = styled(RectButton)<ContainerProps>`
  height: 48px;
  width: 158px;
  flex-direction: row;
  align-items: center;
  /* padding: 0 10px 0 10px; */
  border-radius: 10px;
  margin-right: 16px;
  background: ${props => (props.isActive ? '#E06714' : '#262A34')};
`;

export const ImageBadge = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 12px;
`;

export const BadgeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  color: ${({ theme }) => theme.colors.Neutral100};
  font-size: 14px;
  line-height: 18px;
  max-width: 90px;
`;
