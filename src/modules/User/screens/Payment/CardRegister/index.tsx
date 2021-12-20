import { confirm } from '@stripe/stripe-react-native';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import example_card_png from '../../../../../assets/illustrations/card-example.png';
import ActionButton from '../../../../../shared/components/ActionButton';
import { useAuth } from '../../../../../shared/hooks/auth';
import HeaderSinglePage from '../../../../../shared/screens/HeaderSinglePage';
import {
  Wrapper,
  Container,
  CreditCardImage,
  CardFormContainer,
  CardHeaderWrapper,
  CardHeaderTitle,
  CardBodyWrapper,
  CardInputWrapper,
  CardInputLabel,
  CardInput,
  CardInputNumber,
  SubmitButtonWrapper,
  CardFormRow,
  CardImageWrapper,
} from './styles';

const CardRegister: React.FC = () => {
  const [cardHolderName, setCardholderName] = useState('');
  const [cardDetails, setCardDetails] = useState<any>();
  const { user } = useAuth;
  const handleSubmit = () => {
    try {
      if (!cardDetails.complete || !cardHolderName) {
        Alert.alert('Preencha todos os campos para continuar');
        return;
      }

      console.log(card);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <HeaderSinglePage title="Novo Cartão">
        <CardImageWrapper>
          <CreditCardImage source={example_card_png} />
        </CardImageWrapper>
        <Container>
          <CardFormContainer>
            <CardHeaderWrapper>
              <CardHeaderTitle>Detalhes do cartão</CardHeaderTitle>
            </CardHeaderWrapper>
            <CardBodyWrapper>
              <CardInputWrapper>
                <CardInputLabel>Nome do responsável</CardInputLabel>
                <CardInput onChangeText={setCardholderName} />
              </CardInputWrapper>

              <CardInputWrapper>
                <CardInputLabel>Número do cartão</CardInputLabel>
                <CardInputNumber
                  style={{ marginTop: 8, marginLeft: -14 }}
                  cardStyle={{ textColor: '#FFF' }}
                  postalCodeEnabled={false}
                  placeholder={{
                    number: '4242 4242 4242 4242',
                  }}
                  onCardChange={card => {
                    setCardDetails(card);
                  }}
                />
              </CardInputWrapper>
            </CardBodyWrapper>
          </CardFormContainer>
        </Container>
        <SubmitButtonWrapper>
          <ActionButton onPress={handleSubmit}>Cadastrar</ActionButton>
        </SubmitButtonWrapper>
      </HeaderSinglePage>
    </Wrapper>
  );
};

export default CardRegister;
