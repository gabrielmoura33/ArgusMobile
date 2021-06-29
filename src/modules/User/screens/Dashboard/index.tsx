import { useNavigation, useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, RefreshControl } from 'react-native';

import fabiUserAvatar from '../../../../assets/IMG_0384.jpeg';
import { useAuth } from '../../../../shared/hooks/auth';
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
  ButtonWrapper,
} from './styles';
import { categoryList } from './utils/categoryList';

const userlist = [1, 2, 3, 4, 5];
const delay = 3;

function Dashboard() {
  const { user } = useAuth();
  const containerRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  const handleNavigate = useCallback(
    (routeName: string) => {
      return navigation.navigate(routeName);
    },
    [navigation],
  );
  useScrollToTop(containerRef);

  useEffect(() => {
    const timer1 = setTimeout(() => setLoading(false), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  if (loading) return <SkeletonDashboard />;
  return (
    <Container ref={containerRef} showsVerticalScrollIndicator={false}>
      <Header>
        <ButtonWrapper onPress={() => handleNavigate('ProfileStack')}>
          <Avatar
            source={{
              uri:
                user.avatar_url ||
                'https://liquipedia.net/commons/images/thumb/f/f0/Incognito_Logo_V3_Black_Border.png/600px-Incognito_Logo_V3_Black_Border.png',
            }}
          />
        </ButtonWrapper>
        <UserInfoWrapper>
          <UserWelcomeLabel>Bem vindo(a) de volta,</UserWelcomeLabel>
          <UserName>{user.name}</UserName>
        </UserInfoWrapper>
        <SearchButtonWrapper onPress={() => handleNavigate('SearchScreen')}>
          <SearchIcon />
        </SearchButtonWrapper>
      </Header>
      <LabelWrapper>
        <Label>Categorias</Label>
        <ButtonWrapper onPress={() => handleNavigate('CategoryList')}>
          <SeeMoreLabel>Veja mais</SeeMoreLabel>
        </ButtonWrapper>
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
