import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import theme from '../../../../global/styles/theme';
import ActionButton from '../../../../shared/components/ActionButton';
import { useAuth } from '../../../../shared/hooks/auth';
import IdentificationInput from './components/IdentificationInput';
import { UserIdentificationContainer, Container, Logo, Title } from './styles';

function UserIdentification() {
  const { user } = useAuth();
  const navigator = useNavigation();
  const [name, setName] = useState('');

  function handleNextScreen() {
    return navigator.navigate('UserBirthDate');
  }

  function handleSubmitName() {
    user.name = name;
    user.signed = true;
    // handleNextScreen();
  }
  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Como podemos chamar {'\n'} você?</Title>
      <UserIdentificationContainer>
        <IdentificationInput
          placeholder="Digite seu nome"
          placeholderTextColor={theme.colors.Neutral100}
          onChangeText={setName}
        />
        <ActionButton onPress={handleSubmitName}>Confirmar</ActionButton>
      </UserIdentificationContainer>
    </Container>
  );
}

export default UserIdentification;
