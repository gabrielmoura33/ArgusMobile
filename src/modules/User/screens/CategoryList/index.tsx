import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import HeaderSinglePage from '../../../../shared/screens/HeaderSinglePage';
import CategoryComponent from '../../components/CategoryComponent';
import { categoryList } from '../Dashboard/utils/categoryList';
import { CategoryWrapper, Container, Wrapper } from './styles';

interface CategoryListProps {
  children: ReactNode;
}

function CategoryList({ children }: CategoryListProps) {
  return (
    <Wrapper>
      <HeaderSinglePage title="Categorias">
        <Container
          data={categoryList}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <CategoryWrapper>
              <CategoryComponent name={item.name} source={item.image} />
            </CategoryWrapper>
          )}
        />
      </HeaderSinglePage>
    </Wrapper>
  );
}

export default CategoryList;
