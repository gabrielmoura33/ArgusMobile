import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';

import AppleIcon from '../../../assets/icons/apple-icon.svg';
import FacebookIcon from '../../../assets/icons/facebook-icon.svg';
import GoogleIcon from '../../../assets/icons/google-icon.svg';
import MailIcon from '../../../assets/icons/mail-icon.svg';
import { useAccess } from '../../hooks/access';
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
const medias = ['APPLE', 'GOOGLE', 'LOGIN', 'FACEBOOK'] as MediaProps[];

const buttonIcon = {
  APPLE: AppleIcon,
  FACEBOOK: FacebookIcon,
  GOOGLE: GoogleIcon,
  LOGIN: MailIcon,
};
function SocialLogin() {
  const navigation = useNavigation();
  const { user, signInWithGoogle, signInWithFacebook } = useAuth();
  const { handleSetFirstLaunch } = useAccess();
  async function handleSocialAuth(type: MediaProps) {
    switch (type) {
      case 'LOGIN':
        return navigation.navigate('SignIn');
      case 'GOOGLE':
        await signInWithGoogle();
        return handleSetFirstLaunch();
      case 'FACEBOOK':
        return signInWithFacebook();
      default:
        return navigation.navigate('SignIn');
    }
  }
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
              onPress={() => handleSocialAuth(item as MediaProps)}
            />
          </SocialMediaButtonWrapper>
        )}
      />
      {user.name && (
        <SignLaterWrapper>
          <SignLaterLabel>Entrar Depois</SignLaterLabel>
        </SignLaterWrapper>
      )}
    </Container>
  );
}

export default SocialLogin;
