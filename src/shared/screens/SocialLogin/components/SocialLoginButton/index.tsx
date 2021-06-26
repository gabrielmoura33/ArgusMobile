import React, { useState } from 'react';
import { Platform } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import theme from '../../../../../global/styles/theme';
import { Container } from './styles';

interface SocialLoginButtonProps extends RectButtonProps {
  type: 'APPLE' | 'GOOGLE' | 'FACEBOOK' | 'LOGIN';
  svg: React.FC<SvgProps>;
}

const containerColors = {
  APPLE: theme.colors.Neutral100,
  FACEBOOK: theme.colors.FacebookBlue,
  GOOGLE: theme.colors.Neutral100,
  LOGIN: theme.colors.primary,
};

function SocialLoginButton({
  type,
  svg: Svg,
  ...rest
}: SocialLoginButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [visible, _] = useState(type !== 'APPLE' || Platform.OS !== 'android');

  return (
    <Container visible={visible} color={containerColors[type]} {...rest}>
      <Svg width={40} height={40} />
    </Container>
  );
}

export default SocialLoginButton;
