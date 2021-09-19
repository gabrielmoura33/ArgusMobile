import React, { useState } from 'react';

import casamentoPng from '../../../../../../assets/images/casamento.png';
import {
  JobDescription,
  Container,
  ContentContainer,
  ServiceImage,
  ProviderInfoWrapper,
  ProviderName,
} from './styles';

interface ServiceCardProps {}

function ServiceCard() {
  return (
    <Container>
      <ServiceImage source={casamentoPng} />
      <ContentContainer>
        <ProviderInfoWrapper>
          <ProviderName>Casamento</ProviderName>
          <JobDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
            bibendum nisi. Nam sed ligula eget felis euismod rutrum et quis leo.
            Curabitur dictum luctus sollicitudin. Nullam at risus non lectus
            suscipit sagittis.
          </JobDescription>
        </ProviderInfoWrapper>
      </ContentContainer>
    </Container>
  );
}

export { ServiceCard };
