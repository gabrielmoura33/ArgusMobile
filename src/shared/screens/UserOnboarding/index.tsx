import React, { useEffect } from 'react';
import { Text } from 'react-native';

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

interface OnboardingProps {}

function UserOnboarding() {
  const { setFirstLaunchToken, isFirstLaunch } = useAccess();

  return (
    <Container>
      <ArtistSVG width={352} height={352} />
      <ContentContainer>
        <HeaderTitle>01.</HeaderTitle>
        <Content>
          Se você procura contratar alguem, Encontre seu artista favorito o mais
          próximo possível. Não mais perca a chance de marcar aquela
          apresentação que você sempre sonhou
        </Content>
        <FooterButton>
          <FooterButtonIcon name="chevron-right" />
        </FooterButton>
      </ContentContainer>
    </Container>
  );
}

export { UserOnboarding };
