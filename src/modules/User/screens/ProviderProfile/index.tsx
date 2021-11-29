import { useNavigation, useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import ShareIcon from '../../../../assets/icons/share.svg';
import providerBackgroundSrc from '../../../../assets/tmp/background-provider.png';
import VideoModal from '../../../../shared/components/Modal/VideoModal';
import { useProviderContext } from '../../hooks/providers.context';
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

function ProviderProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedProvider } = useProviderContext();
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
          <ProviderDetailCard onPress={() => setIsModalOpen(true)} />
        </ProviderProfileWrapper>
        <ServicesWrapper>
          <ServiceLabel>Meus Serviços</ServiceLabel>
          <ServiceListWrapper>
            <FlatList
              data={selectedProvider.services}
              keyExtractor={el => el.id}
              style={{
                height: RFValue(290),
                position: 'absolute',
                width: '100%',
                marginBottom: 200,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={el => (
                <ServiceCardWrapper>
                  <ServiceCard service={el.item} />
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
      <VideoModal
        visible={isModalOpen}
        setVisible={setIsModalOpen}
        play={isModalOpen}
      />
    </Wrapper>
  );
}

export default ProviderProfile;
