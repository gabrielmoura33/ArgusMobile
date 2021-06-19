import React from 'react';

import ActionButton from '../../components/ActionButton';
import { UserIdentificationContainer, Container, Logo, Title } from './styles';

function UserBirthDate() {
  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Qual a sua data de {'\n'} nascimento?</Title>
      <UserIdentificationContainer>
        <ActionButton>Confirmar</ActionButton>
      </UserIdentificationContainer>
    </Container>
  );
}

export default UserBirthDate;
