/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ActionButtonProps extends RectButtonProps {
  children: ReactNode;
  isSecondary?: boolean;
}

function ActionButton({ children, ...rest }: ActionButtonProps) {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
}

export default ActionButton;
