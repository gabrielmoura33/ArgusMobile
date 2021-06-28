import { useNavigation } from '@react-navigation/native';
import React from 'react';

import ipodSvg from '../../../assets/icons/ipod.svg';
import { useAccess } from '../../hooks/access';
import ChooseStateButton from './components/ChooseStateButton';
import { ChooseStateContainer, Container, Logo, Title } from './styles';

function ChooseState() {
  const { handleChooseAppState, isFirstLaunch } = useAccess();
  const navigator = useNavigation();
  function handleChooseState(state: 'provider' | 'user') {
    handleChooseAppState(state);
    if (isFirstLaunch === true) return navigator.navigate('UserIdentification');

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
