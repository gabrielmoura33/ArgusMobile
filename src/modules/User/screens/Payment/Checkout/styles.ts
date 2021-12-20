import { CardField } from '@stripe/stripe-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.Secondary};
  flex: 1;
`;

export const Container = styled.View``;

export const CardImageWrapper = styled.View`
  align-items: center;
`;
export const CreditCardImage = styled.Image`
  margin-top: 5%;
`;
export const CardFormContainer = styled.View`
  flex-direction: column;
`;
export const CardHeaderWrapper = styled.View`
  background: ${({ theme }) => theme.colors.DarkerBlue};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  height: 45px;
  margin-top: 50px;
  padding: 12px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CardHeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: ${RFValue(12)}px;
  line-height: 17px;

  color: #ffffff;
`;

export const CardFormRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const CardBodyWrapper = styled.View`
  margin: 14px 0;
`;
export const CardInputWrapper = styled.View`
  margin-bottom: 20px;
`;
export const CardInputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-style: normal;
  font-weight: bold;
  font-size: ${RFValue(12)}px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.7);
`;
export const CardInput = styled.TextInput`
  margin-top: 4px;
  height: 26px;
  color: #ffffff;
  opacity: 0.5;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  border-bottom-width: 1px;
  border-bottom-color: #262a34;
`;

export const CardInputNumber = styled(CardField)`
  margin-top: 4px;
  height: 26px;
  color: #ffffff;
  opacity: 0.5;
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  border-bottom-width: 1px;
  border-bottom-color: #262a34;
`;

export const PaymentRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 12px;
`;

export const PaymentValuesField = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PaymentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(12)}px;
  color: rgba(255, 255, 255, 0.7);
`;
export const PaymentNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(12)}px;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 14px;
`;
export const PaymentValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoBold};
  font-size: ${RFValue(12)}px;
  color: #ffffff;
  font-weight: bold;
`;
export const PaymentRowFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px 0 12px;
  margin-top: 20px;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: #262a34;
`;
export const PaymentLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(16)}px;
  color: rgba(255, 255, 255, 0.7);
`;
export const PaymentTotalValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-size: ${RFValue(20)}px;
  color: #e06714;
`;

export const SubmitButtonWrapper = styled.View`
  /* margin-top: 70%; */
`;
