import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.Secondary};

  padding: ${RFValue(68)}px ${RFValue(25)}px 0 ${RFValue(25)}px;
`;

export const SearchInputWrapper = styled.View`
  margin-bottom: ${RFValue(25)}px;
`;
export const SearchInputContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.Dark500};
  border-radius: ${RFValue(50)}px;
`;
export const SearchIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.Neutral100};
  width: ${RFValue(34)}px;
  height: ${RFValue(34)}px;
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
`;
export const SearchInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.Neutral100};
`;
export const SearchBodyWrapper = styled.View``;
export const SearchSection = styled.View`
  margin-top: 18px;
`;
export const SearchSectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoSlabMedium};
  font-style: normal;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  text-align: center;
  color: #fff;
`;
export const SearchBoxContainer = styled.View`
  margin-top: 18px;
`;

export const SearchBoxRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const SearchBox = styled.TouchableOpacity`
  width: 48%;
`;
export const SearchBoxImage = styled.Image``;
