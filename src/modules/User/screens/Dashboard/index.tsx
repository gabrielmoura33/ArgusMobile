import { useNavigation, useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, RefreshControl } from 'react-native';

import fabiUserAvatar from '../../../../assets/IMG_0384.jpeg';
import ArgusProviderCard from '../../components/ArgusProviderCard';
import CategoryComponent from '../../components/CategoryComponent';
import RelatedProviderCard from '../../components/RelatedProviderCard';
import SkeletonDashboard from '../../skeleton/SkeletonDashboard';
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
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const handleNavigateSearch = useCallback(() => {
    return navigation.navigate('SearchScreen');
  }, [navigation]);

  useScrollToTop(containerRef);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) return <SkeletonDashboard />;
  return (
    <Container
      ref={containerRef}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
    >
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
        ref={containerRef}
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
      <RelatedProviderList>
        {userlist.map(el => (
          <RelatedProviderCardWrapper key={el}>
            <RelatedProviderCard />
          </RelatedProviderCardWrapper>
        ))}
      </RelatedProviderList>
    </Container>
  );
}

export default Dashboard;
