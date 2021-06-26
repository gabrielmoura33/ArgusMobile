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
        {/* <Container>
          {categoryList.map(category => (
            <CategoryWrapper>
              <CategoryComponent name={category.name} source={category.image} />
            </CategoryWrapper>
          ))}
        </Container> */}
      </HeaderSinglePage>
    </Wrapper>
  );
}

export default CategoryList;
