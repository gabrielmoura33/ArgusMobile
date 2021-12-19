import { CardField } from '@stripe/stripe-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.Secondary};
`;

export const Container = styled.View``;

export const CardImageWrapper = styled.View`
  align-items: center;
`;
export const CreditCardImage = styled.Image``;
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
  margin: 29px 0;
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
export const SubmitButtonWrapper = styled.View``;
