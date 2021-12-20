/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import example_card_png from '../../../../../assets/illustrations/card-example.png';
import ActionButton from '../../../../../shared/components/ActionButton';
import { ServiceAddons } from '../../../../../shared/entities/Services';
import HeaderSinglePage from '../../../../../shared/screens/HeaderSinglePage';
import api from '../../../../../shared/services/api';
import { useProviderContext } from '../../../hooks/providers.context';
import {
  Wrapper,
  Container,
  CreditCardImage,
  CardFormContainer,
  CardHeaderWrapper,
  CardHeaderTitle,
  CardBodyWrapper,
  SubmitButtonWrapper,
  CardImageWrapper,
  PaymentRow,
  PaymentTitle,
  PaymentNumber,
  PaymentValue,
  PaymentRowFooter,
  PaymentLabel,
  PaymentValuesField,
  PaymentTotalValue,
} from './styles';

interface RouteParams {
  appointmentId: string;
  finalPrice: number;
  servicePrice: number;
  final_price: number;
  serviceName: string;
  serviceAddons: ServiceAddons[];
  open_environment: boolean;
  rented_equipment: boolean;
  date: number;
}
const CheckoutPage: React.FC = () => {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const { selectedProvider } = useProviderContext();
  const {
    appointmentId,
    date,
    open_environment,
    rented_equipment,
    servicePrice,
    serviceName,
    serviceAddons,
    final_price,
  } = params as RouteParams;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [paymentIntentState, setPaymentIntentState] = useState('');
  const [addonsActive, setAddonsActive] = useState<any>();
  const fetchPaymentSheetParams = async () => {
    const response = await api.post(`/api/v1/payments/checkout`, {
      appointment_id: appointmentId,
    });

    const { paymentIntent, ephemeralKey, customer } = await response.data;
    setPaymentIntentState(paymentIntent);
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const pSheet = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Argus App',
    });

    if (!pSheet.error) {
      setLoading(false);
    }

    // console.log(paymentOption);
  };

  const changeAppointmentStatus = async () => {
    try {
      await api.patch(`/api/v1/appointments/${appointmentId}/status`);
    } catch (error) {
      console.log(error);
    }
  };
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet({
      confirmPayment: true,
      clientSecret: paymentIntentState,
    });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      await changeAppointmentStatus();
      navigate('AppointmentCreated', { date });
    }
  };
  useEffect(() => {
    initializePaymentSheet();

    const environmentAddon = open_environment
      ? serviceAddons.find(el => el.type === 'AMBIENT')
      : null;
    const equipmentAddon = rented_equipment
      ? serviceAddons.find(el => el.type === 'EQUIPMENT')
      : null;

    const addons = {
      environment: {
        active: open_environment,
        price: environmentAddon?.price,
        name: environmentAddon?.name,
      },
      equipment: {
        active: rented_equipment,
        price: equipmentAddon?.price,
        name: equipmentAddon?.name,
      },
    };

    setAddonsActive(addons);
  }, []);

  if (loading) return <View />;

  return (
    <Wrapper>
      <HeaderSinglePage title="Pagamento">
        <CardImageWrapper>
          <CreditCardImage source={example_card_png} />
        </CardImageWrapper>
        <Container>
          <CardFormContainer>
            <CardHeaderWrapper>
              <CardHeaderTitle>DETALHES DA COMPRA</CardHeaderTitle>
              <FontAwesome5 name="chevron-down" size={18} color="#FFF" />
            </CardHeaderWrapper>
            <CardBodyWrapper>
              <PaymentRow>
                <PaymentTitle>{serviceName}</PaymentTitle>
                <PaymentValuesField>
                  <PaymentNumber>1x</PaymentNumber>
                  <PaymentValue>
                    R${servicePrice.toFixed(2).replace('.', ',')}
                  </PaymentValue>
                </PaymentValuesField>
              </PaymentRow>

              {addonsActive?.environment?.active && (
                <PaymentRow>
                  <PaymentTitle>{addonsActive?.environment?.name}</PaymentTitle>
                  <PaymentValuesField>
                    <PaymentNumber>1x</PaymentNumber>
                    <PaymentValue>
                      R$
                      {addonsActive?.environment?.price
                        .toFixed(2)
                        .replace('.', ',')}
                    </PaymentValue>
                  </PaymentValuesField>
                </PaymentRow>
              )}
              {addonsActive?.equipment?.active && (
                <PaymentRow>
                  <PaymentTitle>{addonsActive?.equipment?.name}</PaymentTitle>
                  <PaymentValuesField>
                    <PaymentNumber>1x</PaymentNumber>
                    <PaymentValue>
                      R$
                      {addonsActive?.equipment?.price
                        .toFixed(2)
                        .replace('.', ',')}
                    </PaymentValue>
                  </PaymentValuesField>
                </PaymentRow>
              )}
              <PaymentRowFooter>
                <PaymentLabel>TOTAL</PaymentLabel>
                <PaymentTotalValue>
                  R${final_price.toFixed(2).replace('.', ',')}
                </PaymentTotalValue>
              </PaymentRowFooter>
            </CardBodyWrapper>
          </CardFormContainer>
        </Container>
        <SubmitButtonWrapper>
          <ActionButton onPress={openPaymentSheet}>Confirmar</ActionButton>
        </SubmitButtonWrapper>
      </HeaderSinglePage>
    </Wrapper>
  );
};

export default CheckoutPage;
