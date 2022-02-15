import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import providerSrc from '../../../../assets/IMG_0384.jpeg';
import ScheduleIcon from '../../../../assets/icons/calendar.svg';
import ClockIcon from '../../../../assets/icons/clock.svg';
import { Provider } from '../../../../shared/entities/Provider';
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

interface ProviderCardProps {
  item: Provider;
  onClick?: () => void;
}

function ProviderCard(props: ProviderCardProps) {
  const [loading, setLoading] = useState(true);
  const { item, onClick } = props;
  return (
    <Container activeOpacity={0.6} onPress={onClick}>
      <ProviderAvatar source={{ uri: item.avatar_url }} loading={false} />

      <ContentWrapper>
        <ProviderName>{item.name}</ProviderName>
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
