import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
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
  ProviderAvatarIndicator,
} from './styles';

// interface ProviderCardProps {}

function ProviderCard() {
  const [loading, setLoading] = useState(true);
  const handleFinishLoading = () => {
    setLoading(false);
  };
  return (
    <Container activeOpacity={0.6}>
      <ProviderAvatarIndicator loading={loading}>
        <ActivityIndicator />
      </ProviderAvatarIndicator>
      <ProviderAvatar
        source={{ uri: 'https://thispersondoesnotexist.com/image' }}
        loading={loading}
        onLoadEnd={handleFinishLoading}
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

export default ProviderCard;
