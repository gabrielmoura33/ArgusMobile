import React from 'react';

import example_card_png from '../../../../../assets/illustrations/card-example.png';
import ActionButton from '../../../../../shared/components/ActionButton';
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
                <CardInput />
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
                />
              </CardInputWrapper>
            </CardBodyWrapper>
          </CardFormContainer>
        </Container>
        <SubmitButtonWrapper>
          <ActionButton onPress={() => {}}>Cadastrar</ActionButton>
        </SubmitButtonWrapper>
      </HeaderSinglePage>
    </Wrapper>
  );
};

export default CardRegister;
