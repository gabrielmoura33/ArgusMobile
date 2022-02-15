import { useNavigation, useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useAuth } from '../../../../shared/hooks/auth';
import { useLoader } from '../../../../shared/hooks/loading.context';
import { ProviderService } from '../../../../shared/services/Provider.service';
import ArgusProviderCard from '../../components/ArgusProviderCard';
import CategoryComponent from '../../components/CategoryComponent';
import RelatedProviderCard from '../../components/RelatedProviderCard';
import { useArgusProviderContext } from '../../hooks/argus_providers.context';
import { useProviderContext } from '../../hooks/providers.context';
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
  const { navigate } = useNavigation();
  const containerRef = useRef(null);
  const { isLoading, setLoading } = useLoader();
  const { providers, fetchProvidersApi, setSelectedProvider } =
    useProviderContext();

  const { argusProviders, fetchArgusProvidersApi } = useArgusProviderContext();
  const navigation = useNavigation();

  const handleNavigate = useCallback(
    (routeName: string) => {
      return navigation.navigate(routeName);
    },
    [navigation],
  );

  const handleFilterByCategory = async (category: string) => {
    try {
      setLoading(true);
      const response = await ProviderService.fetchProviders({
        category,
      });
      setLoading(false);
      const providersList = response.rows;

      navigate('SearchResult', { providers: providersList, name: category });
    } catch (error) {
      console.log(error);
    }
  };
  useScrollToTop(containerRef);

  useEffect(() => {
    fetchProvidersApi({ _limit: 5 });
    fetchArgusProvidersApi({ _limit: 5 });
  }, [fetchArgusProvidersApi, fetchProvidersApi]);

  if (isLoading) return <SkeletonDashboard />;
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
          {/* <SeeMoreLabel>Veja mais</SeeMoreLabel> */}
        </ButtonWrapper>
      </LabelWrapper>
      <CategoryList
        ref={containerRef}
        data={categoryList}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <CategoryComponent
            name={item.name}
            source={item.image}
            onPress={() => handleFilterByCategory(item.name)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <LabelWrapper>
        <Label size="medium">Artistas Argus</Label>
        {/* <SeeMoreLabel>Veja mais</SeeMoreLabel> */}
      </LabelWrapper>
      <ArgusProviderList
        data={argusProviders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ArgusProviderCardWrapper>
            <ArgusProviderCard
              item={item}
              onClick={() => {
                setSelectedProvider(item);
                return handleNavigate('ProviderProfile');
              }}
            />
          </ArgusProviderCardWrapper>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <LabelWrapper>
        <Label size="medium">Artistas Relacionados</Label>
      </LabelWrapper>
      <RelatedProviderList>
        {providers.map(el => (
          <RelatedProviderCardWrapper key={el.id}>
            <RelatedProviderCard
              provider={el}
              onPress={() => {
                setSelectedProvider(el);
                return handleNavigate('ProviderProfile');
              }}
            />
          </RelatedProviderCardWrapper>
        ))}
      </RelatedProviderList>
    </Container>
  );
}

export default Dashboard;
