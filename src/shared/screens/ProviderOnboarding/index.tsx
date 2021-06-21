import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import MountShowSVG from '../../../assets/illustrations/mount_show.svg';
import {
  Container,
  ContentContainer,
  HeaderTitle,
  Content,
  FooterButton,
  FooterButtonIcon,
} from './styles';

function ProviderOnboarding() {
  const navigation = useNavigation();

  function handleNextPage() {
    return navigation.navigate('ChooseState');
  }
  return (
    <Container>
      <MountShowSVG width={RFValue(352)} height={RFValue(280)} />
      <ContentContainer>
        <HeaderTitle>02.</HeaderTitle>
        <Content>
          Se você o que você procura é a divulgação do seu show, não perca a
          oportunidade de ser encontrado por milhares de usuários ao redor do
          país.
        </Content>
        <FooterButton onPress={handleNextPage}>
          <FooterButtonIcon name="chevron-right" size={34} />
        </FooterButton>
      </ContentContainer>
    </Container>
  );
}

export { ProviderOnboarding };
