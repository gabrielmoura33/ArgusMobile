import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { Provider } from '../../entities/Provider';
import HeaderSinglePage from '../HeaderSinglePage';
import { Container, Card, CardWrapper } from './styles';

interface RouteParams {
  providers: Provider[];
  name: string;
}
const CommonGroupScreen: React.FC = () => {
  const { params } = useRoute();

  const { providers, name } = params as RouteParams;

  return (
    <HeaderSinglePage title={name}>
      <Container
        data={providers}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardWrapper>
            <Card item={item} />
          </CardWrapper>
        )}
      />
    </HeaderSinglePage>
  );
};

export default CommonGroupScreen;
