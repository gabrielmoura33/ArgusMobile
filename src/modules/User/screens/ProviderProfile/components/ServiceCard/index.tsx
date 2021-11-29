import React from 'react';

import { Service } from '../../../../../../shared/entities/Services';
import {
  JobDescription,
  Container,
  ContentContainer,
  ServiceImage,
  ProviderInfoWrapper,
  ProviderName,
} from './styles';

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Container>
      <ServiceImage source={{ uri: service.category.image_url }} />
      <ContentContainer>
        <ProviderInfoWrapper>
          <ProviderName>{service.name}</ProviderName>
          <JobDescription>{service.description}</JobDescription>
        </ProviderInfoWrapper>
      </ContentContainer>
    </Container>
  );
}

export { ServiceCard };
