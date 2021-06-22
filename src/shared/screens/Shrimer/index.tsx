import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import theme from '../../../global/styles/theme';
import { Container } from './styles';

interface ShrimerProps {
  children: any;
}

function Shrimer({ children }: ShrimerProps) {
  return (
    <Container>
      <SkeletonPlaceholder backgroundColor={theme.colors.DarkerBlue}>
        {children}
      </SkeletonPlaceholder>
    </Container>
  );
}

export default Shrimer;
