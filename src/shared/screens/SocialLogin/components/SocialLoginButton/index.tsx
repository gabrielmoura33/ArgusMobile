import React, { useState } from 'react';
import { Platform } from 'react-native';
import { SvgProps } from 'react-native-svg';

import theme from '../../../../../global/styles/theme';
import { Container } from './styles';

interface SocialLoginButtonProps {
  type: 'APPLE' | 'GOOGLE' | 'FACEBOOK' | 'LOGIN';
  svg: React.FC<SvgProps>;
}

const containerColors = {
  APPLE: theme.colors.Neutral100,
  FACEBOOK: theme.colors.FacebookBlue,
  GOOGLE: theme.colors.Neutral100,
  LOGIN: theme.colors.primary,
};

function SocialLoginButton({ type, svg: Svg }: SocialLoginButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [visible, _] = useState(type !== 'APPLE' || Platform.OS !== 'android');

  async function handleSelectSocialMediaAuth() {
    console.log('ahsbdjha');
  }

  return (
    <Container
      visible={visible}
      color={containerColors[type]}
      onPress={handleSelectSocialMediaAuth}
    >
      <Svg width={40} height={40} />
    </Container>
  );
}

export default SocialLoginButton;
