import React, { useEffect } from 'react';
import { Text } from 'react-native';

import { useAccess } from '../../hooks/access';
import { Container } from './styles';

interface OnboardingProps {}

function Onboarding() {
  const { setFirstLaunchToken } = useAccess();

  useEffect(() => {
    setFirstLaunchToken();
  }, [setFirstLaunchToken]);

  return (
    <Container>
      <Text>Onboarding</Text>
    </Container>
  );
}

export default Onboarding;
