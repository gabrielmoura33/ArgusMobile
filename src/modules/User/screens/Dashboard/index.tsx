import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, RefreshControl } from 'react-native';

import fabiUserAvatar from '../../../../assets/IMG_0384.jpeg';
import ArgusProviderCard from '../../components/ArgusProviderCard';
import CategoryComponent from '../../components/CategoryComponent';
import RelatedProviderCard from '../../components/RelatedProviderCard';
import {
  Container,
  Header,
  Avatar,
  UserInfoWrapper,
  SearchButtonWrapper,
  UserWelcomeLabel,
  UserName,
  SearchIcon,
  LabelWrapper,
  Label,
  SeeMoreLabel,
  CategoryList,
  ArgusProviderList,
  ArgusProviderCardWrapper,
  RelatedProviderList,
  RelatedProviderCardWrapper,
} from './styles';
import { categoryList } from './utils/categoryList';

const userlist = [1, 2, 3, 4, 5];

function Dashboard() {
  const navigation = useNavigation();
  const handleNavigateSearch = useCallback(() => {
    return navigation.navigate('SearchScreen');
  }, [navigation]);
  return (
    <Container showsVerticalScrollIndicator={false} nestedScrollEnabled>
      <Header>
        <Avatar source={fabiUserAvatar} />
        <UserInfoWrapper>
          <UserWelcomeLabel>Bem vindo(a) de volta,</UserWelcomeLabel>
          <UserName>Fabiane Almeida Santos</UserName>
        </UserInfoWrapper>
        <SearchButtonWrapper onPress={handleNavigateSearch}>
          <SearchIcon />
        </SearchButtonWrapper>
      </Header>
      <LabelWrapper>
        <Label>Categorias</Label>
        <SeeMoreLabel>Veja mais</SeeMoreLabel>
      </LabelWrapper>
      <CategoryList
        data={categoryList}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <CategoryComponent name={item.name} source={item.image} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <LabelWrapper>
        <Label size="medium">Artistas Argus</Label>
        <SeeMoreLabel>Veja mais</SeeMoreLabel>
      </LabelWrapper>
      <ArgusProviderList
        data={userlist}
        keyExtractor={item => item}
        renderItem={() => (
          <ArgusProviderCardWrapper>
            <ArgusProviderCard />
          </ArgusProviderCardWrapper>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <LabelWrapper>
        <Label size="medium">Artistas Relacionados</Label>
        <SeeMoreLabel>Veja mais</SeeMoreLabel>
      </LabelWrapper>
      <RelatedProviderList
        data={userlist}
        keyExtractor={item => item}
        contentContainerStyle={{ marginBottom: 100 }}
        renderItem={() => (
          <RelatedProviderCardWrapper>
            <RelatedProviderCard />
          </RelatedProviderCardWrapper>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default Dashboard;
