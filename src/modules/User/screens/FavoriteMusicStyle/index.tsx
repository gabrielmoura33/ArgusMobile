import { useNavigation } from '@react-navigation/native';
import React from 'react';

import theme from '../../../../global/styles/theme';
import ActionButton from '../../../../shared/components/ActionButton';
import IdentificationInput from './components/IdentificationInput';
import { FavoriteMusicStyleContainer, Container, Logo, Title } from './styles';

function FavoriteMusicStyle() {
  const navigator = useNavigation();

  async function handleNextScreen() {
    return navigator.navigate('SocialLogin');
  }

  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Qual seu estilo musical {'\n'} favorito?</Title>
      <FavoriteMusicStyleContainer>
        <IdentificationInput
          placeholder="Digite um estilo"
          placeholderTextColor={theme.colors.Neutral100}
        />
        <ActionButton onPress={handleNextScreen}>Confirmar</ActionButton>
      </FavoriteMusicStyleContainer>
    </Container>
  );
}

export default FavoriteMusicStyle;
