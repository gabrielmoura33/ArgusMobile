import {
  useNavigation,
  useRoute,
  useScrollToTop,
} from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Share } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import ShareIcon from '../../../../assets/icons/share.svg';
import providerBackgroundSrc from '../../../../assets/tmp/background-provider.png';
import LoadingComponent from '../../../../shared/components/LoadingComponent';
import VideoModal from '../../../../shared/components/Modal/VideoModal';
import { ProviderService } from '../../../../shared/services/Provider.service';
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

interface RouteProps {
  params: {
    id?: string;
  };
}
function ProviderProfile() {
  const { params }: any = useRoute();

  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedProvider, setSelectedProvider } = useProviderContext();
  const navigation = useNavigation();
  const handleNavigate = useCallback(
    (routeName: string) => {
      return navigation.navigate(routeName);
    },
    [navigation],
  );

  const handleFetchProvider = useCallback(async () => {
    try {
      const response = await ProviderService.fetchProviders({ id: params?.id });
      const provider = response.rows[0];
      setSelectedProvider(provider);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [params?.id, setSelectedProvider]);

  const handleShare = useCallback(() => {
    Share.share({
      message: `Clique aqui para verificar o perfil do prestador ${selectedProvider.name} \n exp://192.168.18.3:19000/--/appointment-created?id=${selectedProvider.id}`,
      title: 'Compartilhar',
    });
  }, [selectedProvider.id, selectedProvider.name]);

  useEffect(() => {
    if (selectedProvider && selectedProvider.id) {
      setLoading(false);
      return;
    }
    handleFetchProvider();
  }, [handleFetchProvider, selectedProvider]);

  if (loading) return <LoadingComponent />;
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
            <IconButtonCustom svg={ShareIcon} onPress={handleShare} />
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
