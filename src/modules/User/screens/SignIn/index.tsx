import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, useEffect } from 'react';
import { Text } from 'react-native';

import { useAccess } from '../../../../shared/hooks/access';
import { Container } from './styles';

interface SignInProps {}

function SignIn() {
  useEffect(() => {
    AsyncStorage.clear();
  }, []);
  return (
    <Container>
      <Text>USER SignIn</Text>
    </Container>
  );
}

export default SignIn;
