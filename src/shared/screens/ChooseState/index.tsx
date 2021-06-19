import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

import ipodSvg from '../../../assets/icons/ipod.svg';
import { useAccess } from '../../hooks/access';
import ChooseStateButton from './components/ChooseStateButton';
import { ChooseStateContainer, Container, Logo, Title } from './styles';

function ChooseState() {
  const { setChooseState } = useAccess();

  useEffect(() => {
    AsyncStorage.clear();
  }, []);
  function handleChooseState(state: 'provider' | 'user') {
    setChooseState(state);
  }
  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Seja bem-vindo, o que você {'\n'} deseja?</Title>
      <ChooseStateContainer>
        <ChooseStateButton
          svg={ipodSvg}
          onPress={() => handleChooseState('user')}
        >
          Encontrar um {'\n'} artista
        </ChooseStateButton>
      </ChooseStateContainer>
    </Container>
  );
}

export default ChooseState;
