/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Title } from './styles';

interface ChooseStateButtonProps extends RectButtonProps {
  children: ReactNode;
  svg: React.FC<SvgProps>;
}

function ChooseStateButton({
  children,
  svg: Svg,
  ...rest
}: ChooseStateButtonProps) {
  return (
    <Container {...rest}>
      <Svg />
      <Title>{children}</Title>
    </Container>
  );
}

export default ChooseStateButton;
