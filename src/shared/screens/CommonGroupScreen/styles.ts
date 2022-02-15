import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import ProviderCard from '../../../modules/User/components/ProviderCard';

export const Container = styled(FlatList)``;

export const CardWrapper = styled.View`
  margin-top: 20px;
`;
export const Card = styled(ProviderCard)`
  /* margin-right: ${RFValue(100)}px; */
`;
