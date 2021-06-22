import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  CategoryBackground,
  CategoryComponentLabel,
  Container,
} from './styles';

interface CategoryComponentProps extends TouchableOpacityProps {
  name: string;
  source: string;
}

function CategoryComponent({ name, source, ...rest }: CategoryComponentProps) {
  return (
    <Container {...rest}>
      <CategoryBackground source={source as any}>
        <CategoryComponentLabel>{name}</CategoryComponentLabel>
      </CategoryBackground>
    </Container>
  );
}

export default CategoryComponent;
