import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

import HeaderSinglePage from '../../../../shared/screens/HeaderSinglePage';
import RelatedProviderCard from '../../components/RelatedProviderCard';
import {
  ActionButtonContainer,
  CardWrapper,
  Container,
  RemoveItemButton,
  Wrapper,
} from './styles';

function Favorites() {
  return (
    <Wrapper>
      <HeaderSinglePage title="Favoritos">
        <Container>
          <CardWrapper>
            <Swipeable
              overshootRight
              renderRightActions={() => (
                <Animated.View>
                  <ActionButtonContainer>
                    <RemoveItemButton
                    // onPress={() => removeFavorite(data.item.id)}
                    >
                      <Feather name="x" size={24} color="#FFF" />
                    </RemoveItemButton>
                  </ActionButtonContainer>
                </Animated.View>
              )}
            >
              {/* <RelatedProviderCard /> */}
            </Swipeable>
          </CardWrapper>
        </Container>
      </HeaderSinglePage>
    </Wrapper>
  );
}

export default Favorites;
