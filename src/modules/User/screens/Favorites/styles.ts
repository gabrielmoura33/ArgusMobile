import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.Secondary};
`;
export const Container = styled.View``;

export const CardWrapper = styled.View`
  width: 100%;
  height: ${RFValue(112)}px;
  margin-bottom: ${RFValue(20)}px;
  position: relative;
`;

export const ActionButtonContainer = styled.View`
  top: 40%;
  left: 1%;
  padding: 0 10px;
`;

export const RemoveItemButton = styled(RectButton)`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  background: #df2c2c;
  border-radius: ${RFValue(22.5)}px;
  align-items: center;
  justify-content: center;
`;
