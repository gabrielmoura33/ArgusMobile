import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import ArtistSVG from '../../../assets/illustrations/artists.svg';
import { useAccess } from '../../hooks/access';
import {
  Container,
  ContentContainer,
  HeaderTitle,
  Content,
  FooterButton,
  FooterButtonIcon,
} from './styles';

function UserOnboarding() {
  const { setFirstLaunchToken } = useAccess();
  const navigation = useNavigation();
  function handleNext() {
    return navigation.navigate('ProviderOnboarding');
  }
  return (
    <Container>
      <ArtistSVG width={RFValue(352)} height={RFValue(250)} />
      <ContentContainer>
        <HeaderTitle>01.</HeaderTitle>
        <Content>
          Se você procura contratar alguem, Encontre seu artista favorito o mais
          próximo possível. Não mais perca a chance de marcar aquela
          apresentação que você sempre sonhou
        </Content>
        <FooterButton onPress={handleNext}>
          <FooterButtonIcon name="chevron-right" size={34} />
        </FooterButton>
      </ContentContainer>
    </Container>
  );
}

export { UserOnboarding };
