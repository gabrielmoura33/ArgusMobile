import React from 'react';

import theme from '../../../../global/styles/theme';
import ActionButton from '../../../../shared/components/ActionButton';
import IdentificationInput from './components/IdentificationInput';
import { UserIdentificationContainer, Container, Logo, Title } from './styles';

function UserIdentification() {
  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Como podemos chamar {'\n'} você?</Title>
      <UserIdentificationContainer>
        <IdentificationInput
          placeholder="Digite seu nome"
          placeholderTextColor={theme.colors.Neutral100}
        />
        <ActionButton>Confirmar</ActionButton>
      </UserIdentificationContainer>
    </Container>
  );
}

export default UserIdentification;
