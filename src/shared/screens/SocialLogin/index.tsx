import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import AppleIcon from '../../../assets/icons/apple-icon.svg';
import FacebookIcon from '../../../assets/icons/facebook-icon.svg';
import GoogleIcon from '../../../assets/icons/google-icon.svg';
import MailIcon from '../../../assets/icons/mail-icon.svg';
import { useAuth } from '../../hooks/auth';
import SocialLoginButton from './components/SocialLoginButton';
import {
  Container,
  Logo,
  Title,
  SocialMediaButtonWrapper,
  SocialMedias,
  SignLaterWrapper,
  SignLaterLabel,
} from './styles';

type MediaProps = 'APPLE' | 'FACEBOOK' | 'GOOGLE' | 'LOGIN';
const medias = ['APPLE', 'FACEBOOK', 'GOOGLE', 'LOGIN'] as MediaProps[];

const buttonIcon = {
  APPLE: AppleIcon,
  FACEBOOK: FacebookIcon,
  GOOGLE: GoogleIcon,
  LOGIN: MailIcon,
};
function SocialLogin() {
  const { user } = useAuth();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Como deseja entrar ?</Title>
      <SocialMedias
        data={medias as any}
        contentContainerStyle={{
          alignItems: 'center',
          flexDirection: Platform.OS === 'android' ? 'row' : 'column',
          justifyContent: 'center',

          paddingTop: Platform.OS === 'android' ? 120 : 100,
        }}
        keyExtractor={item => medias.indexOf(item as MediaProps) as any}
        numColumns={2}
        renderItem={({ item }) => (
          <SocialMediaButtonWrapper>
            <SocialLoginButton
              svg={buttonIcon[item as MediaProps]}
              type={item as any}
            />
          </SocialMediaButtonWrapper>
        )}
      />
      <SignLaterWrapper>
        <SignLaterLabel>Entrar Depois</SignLaterLabel>
      </SignLaterWrapper>
    </Container>
  );
}

export default SocialLogin;
