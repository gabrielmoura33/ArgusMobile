import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.primary};
  flex: 1;
  align-items: center;
  padding: 25px 0;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.Secondary};
  padding: 7%;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(40)}px;
  line-height: 47px;
  color: ${props => props.theme.colors.Neutral100};
  opacity: 0.65;
  margin-top: ${RFValue(30)}px;
  margin-bottom: ${RFValue(30)}px;
`;
export const Content = styled.Text`
  color: ${props => props.theme.colors.Neutral100};
  font-size: ${RFValue(16)}px;
  line-height: 24px;
  text-align: justify;

  margin-bottom: ${RFValue(60)}px;
`;

export const FooterButton = styled.TouchableOpacity`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.Neutral100};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(30)}px;
  align-self: flex-end;
`;

export const FooterButtonIcon = styled(Feather)`
  color: ${props => props.theme.colors.Neutral100};
`;
