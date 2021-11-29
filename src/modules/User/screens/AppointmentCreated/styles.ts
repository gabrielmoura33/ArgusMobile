import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.Secondary};
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.Neutral100};
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const OkButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  color: ${({ theme }) => theme.colors.Neutral100};
  font-size: 18px;
`;
