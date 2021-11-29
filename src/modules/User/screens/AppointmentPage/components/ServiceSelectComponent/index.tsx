/* eslint-disable react/require-default-props */
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { BadgeTitle, Container, ImageBadge } from './styles';

interface ServiceSelectComponentProps extends RectButtonProps {
  name: string;
  image: ImageSourcePropType;
  isActive?: boolean;
}

function ServiceSelectComponent({
  name,
  image,
  ...rest
}: ServiceSelectComponentProps) {
  return (
    <Container {...rest}>
      <ImageBadge source={image} />
      <BadgeTitle numberOfLines={1}>{name}</BadgeTitle>
    </Container>
  );
}

export { ServiceSelectComponent };
