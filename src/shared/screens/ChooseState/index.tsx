import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { useAccess } from '../../hooks/access';
import { Container } from './styles';

function ChooseState() {
  const { setChooseState } = useAccess();

  return (
    <Container>
      <Text>Choose State</Text>
    </Container>
  );
}

export default ChooseState;
