import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import providerSrc from '../../../../assets/IMG_0384.jpeg';
import ScheduleIcon from '../../../../assets/icons/calendar.svg';
import ClockIcon from '../../../../assets/icons/clock.svg';
import {
  Container,
  ProviderAvatar,
  ProviderName,
  AvailablePeriodWrapper,
  AvailablePeriod,
  AvailableTimeWrapper,
  AvailableTime,
  ContentWrapper,
} from './styles';

// interface ProviderCardProps {}

function ArgusProviderCard() {
  return (
    <Container>
      <ProviderAvatar
        source={{ uri: 'https://thispersondoesnotexist.com/image' }}
      />
      <ContentWrapper>
        <ProviderName>Thiago Silva</ProviderName>
        <AvailablePeriodWrapper>
          <ClockIcon width={RFValue(15)} height={RFValue(15)} />
          <AvailablePeriod>Terça à Quinta</AvailablePeriod>
        </AvailablePeriodWrapper>
        <AvailableTimeWrapper>
          <ScheduleIcon width={RFValue(15)} height={RFValue(15)} />
          <AvailableTime>8h às 18h</AvailableTime>
        </AvailableTimeWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default ArgusProviderCard;
