import { Feather } from '@expo/vector-icons';
import { TextInput as TInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.Neutral100};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.Neutral100};

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(TInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.Secondary};
  opacity: 0.7;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.GothicA1};
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;
