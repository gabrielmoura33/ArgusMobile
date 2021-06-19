import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container, Title } from './styles';

interface ActionButtonProps {
  children: ReactNode;
}

function ActionButton({ children }: ActionButtonProps) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}

export default ActionButton;
