import React from 'react';

import FavoritesIcon from '../../../../../../assets/icons/favorite.svg';
import StarCommentsIcon from '../../../../../../assets/icons/star-coments.svg';
import StarOutlinedIcon from '../../../../../../assets/icons/star-outlined.svg';
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

function ProviderDetailCard() {
  return (
    <Container>
      <ProviderAvatar
        source={{ uri: 'https://thispersondoesnotexist.com/image' }}
      />
      <ContentContainer>
        <ProviderInfoWrapper>
          <ProviderName>John Doe</ProviderName>
          <CategoryTitle>Banda de casamento</CategoryTitle>
        </ProviderInfoWrapper>
        <ProviderInfoFooter>
          <StatisticsWrapper>
            <FavoritesIcon width={20} height={20} />
            <Label>5.0</Label>
            <Legend>Reviews</Legend>
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StarOutlinedIcon width={20} height={20} />
            <Label>3.000</Label>
            <Legend>Favoritos</Legend>
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StarCommentsIcon width={20} height={20} />
            <Label>30</Label>
            <Legend>Serviços</Legend>
          </StatisticsWrapper>
        </ProviderInfoFooter>
      </ContentContainer>
    </Container>
  );
}

export { ProviderDetailCard };
