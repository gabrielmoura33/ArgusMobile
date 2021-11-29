import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import providerSrc from '../../../../assets/IMG_0384.jpeg';
import ScheduleIcon from '../../../../assets/icons/calendar.svg';
import ClockIcon from '../../../../assets/icons/clock.svg';
import { Provider } from '../../../../shared/entities/Provider';
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

interface RelatedProviderCardProps extends RectButtonProps {
  provider: Provider;
}
function RelatedProviderCard({ provider, ...rest }: RelatedProviderCardProps) {
  return (
    <Container {...rest}>
      <ProviderAvatar source={{ uri: provider.avatar_url }} />
      <ContentContainer>
        <ProviderInfoWrapper>
          <CategoryTitle>Banda de casamento</CategoryTitle>
          <ProviderName>{provider.name}</ProviderName>
        </ProviderInfoWrapper>
        <ProviderInfoFooter>
          <AvailablePeriodWrapper>
            <ClockIcon width={RFValue(15)} height={RFValue(15)} />
            <AvailablePeriod>
              {provider.providerInfo.week_schedule}
            </AvailablePeriod>
          </AvailablePeriodWrapper>
          <AvailableTimeWrapper>
            <ScheduleIcon width={RFValue(15)} height={RFValue(15)} />
            <AvailableTime>{provider.providerInfo.work_schedule}</AvailableTime>
          </AvailableTimeWrapper>
        </ProviderInfoFooter>
      </ContentContainer>
    </Container>
  );
}

export default RelatedProviderCard;
