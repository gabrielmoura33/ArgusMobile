import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface IosCalendarComponentProps {
  children: ReactNode;
}

function IosCalendarComponent({ children }: IosCalendarComponentProps) {
  return (
    <Container>
      <Text>IOSCalendarComponent</Text>
      {children}
    </Container>
  );
}

export default IosCalendarComponent;
