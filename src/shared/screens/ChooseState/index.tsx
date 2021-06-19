import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { useAccess } from '../../hooks/access';
import { Container, Logo, Title } from './styles';

function ChooseState() {
  const { setChooseState } = useAccess();

  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Seja bem-vindo, o que você deseja?</Title>
    </Container>
  );
}

export default ChooseState;
