import React from 'react';
import { View, RefreshControl } from 'react-native';

import fabiUserAvatar from '../../../../assets/IMG_0384.jpeg';
import ProviderCard from '../../components/ProviderCard';
import {
  Container,
  Header,
  Avatar,
  UserInfoWrapper,
  UserWelcomeLabel,
  UserName,
  SearchIcon,
  LabelWrapper,
  Label,
  SeeMoreLabel,
  CategoryList,
  CategoryBackgroundWrapper,
  CategoryBackground,
  CategoryComponentLabel,
  ProviderList,
  ProviderCardWrapper,
} from './styles';
import { categoryList } from './utils/categoryList';

const userlist = [1, 2, 3, 4, 5];
function CategoryComponet({ name, source }: any) {
  return (
    <CategoryBackgroundWrapper>
      <CategoryBackground source={source}>
        <CategoryComponentLabel>{name}</CategoryComponentLabel>
      </CategoryBackground>
    </CategoryBackgroundWrapper>
  );
}
function Dashboard() {
  return (
    <Container>
      <Header>
        <Avatar source={fabiUserAvatar} />
        <UserInfoWrapper>
          <UserWelcomeLabel>Bem vindo(a) de volta,</UserWelcomeLabel>
          <UserName>Fabiane Almeida Santos</UserName>
        </UserInfoWrapper>
        <SearchIcon />
      </Header>
      <LabelWrapper>
        <Label>Categorias</Label>
        <SeeMoreLabel>Veja mais</SeeMoreLabel>
      </LabelWrapper>
      <CategoryList
        data={categoryList}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <CategoryComponet name={item.name} source={item.image} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <LabelWrapper>
        <Label size="medium">Artistas Argus</Label>
        <SeeMoreLabel>Veja mais</SeeMoreLabel>
      </LabelWrapper>
      <ProviderList
        data={userlist}
        keyExtractor={item => item}
        renderItem={() => (
          <ProviderCardWrapper>
            <ProviderCard />
          </ProviderCardWrapper>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Container>
  );
}

export default Dashboard;
