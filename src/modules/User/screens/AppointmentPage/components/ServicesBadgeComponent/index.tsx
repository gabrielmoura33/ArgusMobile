/* eslint-disable react/require-default-props */
import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Container, Title, Info } from './styles';

interface ServicesBadgeComponentProps {
  svg: React.FC<SvgProps>;
  title: string;
  info: string;
  isActive?: boolean;
  handleClick: () => void;
}

function ServicesBadgeComponent({
  svg: Svg,
  title,
  info,
  isActive = false,
  handleClick,
}: ServicesBadgeComponentProps) {
  return (
    <Container onPress={handleClick} isActive={isActive}>
      <Svg width={20} height={20} />
      <Title>{title}</Title>
      <Info>{info}</Info>
    </Container>
  );
}

export { ServicesBadgeComponent };
