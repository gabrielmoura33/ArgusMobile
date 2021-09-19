import { useNavigation, useScrollToTop } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import ShareIcon from '../../../../assets/icons/share.svg';
import providerBackgroundSrc from '../../../../assets/tmp/background-provider.png';
import { Provider } from '../../../../shared/entities/Provider';
import { ProviderDetailCard } from './components/ProviderDetailCard';
import { ServiceCard } from './components/ServiceCard';
import {
  Wrapper,
  BackgroundImage,
  Container,
  ProviderProfileWrapper,
  ServicesWrapper,
  ServiceLabel,
  ServiceListWrapper,
  ServiceCardWrapper,
  ButtonsWrapper,
  ActionButtonCustom,
  IconButtonCustom,
} from './styles';

interface ProviderProfileProps {
  provider: Provider;
}

function ProviderProfile() {
  const navigation = useNavigation();
  const handleNavigate = useCallback(
    (routeName: string) => {
      return navigation.navigate(routeName);
    },
    [navigation],
  );
  return (
    <Wrapper>
      <BackgroundImage source={providerBackgroundSrc} />
      <Container>
        <ProviderProfileWrapper>
          <ProviderDetailCard />
        </ProviderProfileWrapper>
        <ServicesWrapper>
          <ServiceLabel>Meus Serviços</ServiceLabel>
          <ServiceListWrapper>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              style={{
                height: RFValue(290),
                position: 'absolute',
                width: '100%',
                marginBottom: 200,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <ServiceCardWrapper>
                  <ServiceCard />
                </ServiceCardWrapper>
              )}
            />
          </ServiceListWrapper>
          <ButtonsWrapper>
            <ActionButtonCustom
              onPress={() => handleNavigate('CreateAppointment')}
            >
              Contratar
            </ActionButtonCustom>
            <IconButtonCustom svg={ShareIcon} />
          </ButtonsWrapper>
        </ServicesWrapper>
      </Container>
    </Wrapper>
  );
}

export default ProviderProfile;
