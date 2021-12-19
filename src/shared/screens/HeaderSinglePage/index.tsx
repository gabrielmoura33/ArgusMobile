import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';

import { BackButton, Container, Header, Icon, Title } from './styles';

interface HeaderSingleProps {
  children: ReactNode;
  title: string;
}

function HeaderSinglePage({ children, title }: HeaderSingleProps) {
  // const navigation = useNavigation();
  function handleGoBack() {
    //   return navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} />
        </BackButton>
        <Title>{title}</Title>
      </Header>
      {children}
    </Container>
  );
}

export default HeaderSinglePage;
