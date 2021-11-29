import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container } from './styles';

interface IconButtonProps extends RectButtonProps {
  svg: React.FC<SvgProps>;
}

function IconButton({ svg: Svg, ...rest }: IconButtonProps) {
  return (
    <Container {...rest}>
      <Svg />
    </Container>
  );
}

export default IconButton;
