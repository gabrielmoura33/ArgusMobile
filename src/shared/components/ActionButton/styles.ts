import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ActionButtonProps {
  isSecondary?: boolean;
}
export const Container = styled(RectButton)<ActionButtonProps>`
  height: ${RFValue(50)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;

  ${props =>
    props.isSecondary &&
    css`
      background-color: #db4437;
    `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.GothicA1};
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  line-height: 46px;
  text-align: center;
  color: ${({ theme }) => theme.colors.Neutral100};
  letter-spacing: ${RFValue(3)}px;
`;
