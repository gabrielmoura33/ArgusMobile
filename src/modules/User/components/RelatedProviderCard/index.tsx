import React from 'react';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import providerSrc from '../../../../assets/IMG_0384.jpeg';
import ScheduleIcon from '../../../../assets/icons/calendar.svg';
import ClockIcon from '../../../../assets/icons/clock.svg';
import {
  Container,
  ProviderAvatar,
  ContentContainer,
  ProviderInfoWrapper,
  CategoryTitle,
  ProviderName,
  ProviderInfoFooter,
  AvailablePeriodWrapper,
  AvailablePeriod,
  AvailableTimeWrapper,
  AvailableTime,
} from './styles';

function RelatedProviderCard() {
  return (
    <Container>
      <ProviderAvatar
        source={{ uri: 'https://thispersondoesnotexist.com/image' }}
      />
      <ContentContainer>
        <ProviderInfoWrapper>
          <CategoryTitle>Banda de casamento</CategoryTitle>
          <ProviderName>John Doe</ProviderName>
        </ProviderInfoWrapper>
        <ProviderInfoFooter>
          <AvailablePeriodWrapper>
            <ClockIcon width={RFValue(15)} height={RFValue(15)} />
            <AvailablePeriod>Terça à Quinta</AvailablePeriod>
          </AvailablePeriodWrapper>
          <AvailableTimeWrapper>
            <ScheduleIcon width={RFValue(15)} height={RFValue(15)} />
            <AvailableTime>8h às 18h</AvailableTime>
          </AvailableTimeWrapper>
        </ProviderInfoFooter>
      </ContentContainer>
    </Container>
  );
}

export default RelatedProviderCard;
