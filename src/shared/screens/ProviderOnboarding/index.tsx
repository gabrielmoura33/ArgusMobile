import React, { useEffect } from 'react';
import { Text } from 'react-native';

import MountShowSVG from '../../../assets/illustrations/mount_show.svg';
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

function ProviderOnboarding() {
  const { setFirstLaunchToken, isFirstLaunch } = useAccess();

  return (
    <Container>
      <MountShowSVG width={352} height={352} />
      <ContentContainer>
        <HeaderTitle>02.</HeaderTitle>
        <Content>
          Se você o que você procura é a divulgação do seu show, não perca a
          oportunidade de ser encontrado por milhares de usuários ao redor do
          país.
        </Content>
        <FooterButton>
          <FooterButtonIcon name="chevron-right" />
        </FooterButton>
      </ContentContainer>
    </Container>
  );
}

export { ProviderOnboarding };
