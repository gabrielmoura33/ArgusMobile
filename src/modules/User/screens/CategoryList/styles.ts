import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.Secondary};
`;
export const Container = styled(FlatList)`
  padding: 0 ${RFValue(35)}px 0 0;
`;

export const CategoryWrapper = styled.View``;
