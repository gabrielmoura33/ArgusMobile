import { Feather } from '@expo/vector-icons';
import { TextInput as TInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  border-width: 2px;
  border-color: #232129;

  margin-bottom: 8px;
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
  color: #fff;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;
