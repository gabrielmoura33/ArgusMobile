import React from 'react';

import theme from '../../../../global/styles/theme';
import ActionButton from '../../../../shared/components/ActionButton';
import { useAccess } from '../../../../shared/hooks/access';
import IdentificationInput from './components/IdentificationInput';
import { FavoriteMusicStyleContainer, Container, Logo, Title } from './styles';

function FavoriteMusicStyle() {
  const { setFirstLaunchToken } = useAccess();

  function handleSetFirstLaunch() {
    return setFirstLaunchToken();
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
        <ActionButton onPress={handleSetFirstLaunch}>Confirmar</ActionButton>
      </FavoriteMusicStyleContainer>
    </Container>
  );
}

export default FavoriteMusicStyle;
