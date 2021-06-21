import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import ipodSvg from '../../../assets/icons/ipod.svg';
import { useAccess } from '../../hooks/access';
import ChooseStateButton from './components/ChooseStateButton';
import { ChooseStateContainer, Container, Logo, Title } from './styles';

function ChooseState() {
  const { setChooseState, isFirstLaunch } = useAccess();
  const navigator = useNavigation();
  function handleChooseState(state: 'provider' | 'user') {
    setChooseState(state);
    if (isFirstLaunch) return navigator.navigate('UserIdentification');

    return navigator.navigate('SocialLogin');
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
