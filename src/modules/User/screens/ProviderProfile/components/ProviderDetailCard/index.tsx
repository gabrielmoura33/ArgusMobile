import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import FavoritesIcon from '../../../../../../assets/icons/favorite.svg';
import StarCommentsIcon from '../../../../../../assets/icons/star-coments.svg';
import StarOutlinedIcon from '../../../../../../assets/icons/star-outlined.svg';
import { useProviderContext } from '../../../../hooks/providers.context';
import {
  CategoryTitle,
  Container,
  ContentContainer,
  ProviderAvatar,
  ProviderInfoFooter,
  ProviderInfoWrapper,
  ProviderName,
  StatisticsWrapper,
  Label,
  Legend,
} from './styles';

interface ProviderDetailCardProps extends RectButtonProps {}
function ProviderDetailCard({ ...rest }: ProviderDetailCardProps) {
  const { selectedProvider } = useProviderContext();
  return (
    <Container {...rest}>
      <ProviderAvatar source={{ uri: selectedProvider.avatar_url }} />
      <ContentContainer>
        <ProviderInfoWrapper>
          <ProviderName>{selectedProvider.name}</ProviderName>
          <CategoryTitle>Banda de casamento</CategoryTitle>
        </ProviderInfoWrapper>
        <ProviderInfoFooter>
          <StatisticsWrapper>
            <FavoritesIcon width={20} height={20} />
            <Label>{selectedProvider.providerInfo.reviews}</Label>
            <Legend>Reviews</Legend>
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StarOutlinedIcon width={20} height={20} />
            <Label>{selectedProvider.providerInfo.favorites}</Label>
            <Legend>Favoritos</Legend>
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StarCommentsIcon width={20} height={20} />
            <Label>{selectedProvider.providerInfo.average_review}</Label>
            <Legend>Serviços</Legend>
          </StatisticsWrapper>
        </ProviderInfoFooter>
      </ContentContainer>
    </Container>
  );
}

export { ProviderDetailCard };
