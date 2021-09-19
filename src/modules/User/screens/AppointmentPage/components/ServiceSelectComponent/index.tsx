import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import weddingSrc from '../../../../../../assets/images/casamento.png';
import { BadgeTitle, Container, ImageBadge } from './styles';

interface ServiceSelectComponentProps {}

function ServiceSelectComponent() {
  return (
    <Container>
      <ImageBadge source={weddingSrc} />
      <BadgeTitle>Casamento</BadgeTitle>
    </Container>
  );
}

export { ServiceSelectComponent };
