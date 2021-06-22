import { FlatList } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import SearchSVG from '../../../../assets/icons/big_search.svg';

export const Container = styled.ScrollView`
  padding: ${RFPercentage(2)}% ${RFValue(20.4)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  /* justify-content: space-between; */
`;
export const Avatar = styled.Image`
  width: ${RFValue(53)}px;
  height: ${RFValue(53)}px;
  border-radius: ${RFValue(35)}px;
`;
export const UserInfoWrapper = styled.View`
  margin-left: 3%;
  width: 74%;
`;
export const UserWelcomeLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoBold};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoBold};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.Neutral600};
`;
export const SearchIcon = styled(SearchSVG)`
  color: ${({ theme }) => theme.colors.Neutral100};
`;

export const LabelWrapper = styled.View`
  margin-top: ${RFValue(28.34)}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

interface LabelProps {
  size?: 'small' | 'medium' | 'large';
}
export const Label = styled.Text<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.Neutral600};

  ${props => props.size === 'medium' && `font-size: ${RFValue(18)}px`}
`;

export const SeeMoreLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CategoryList = styled(FlatList)``;

export const ArgusProviderList = styled(FlatList)`
  margin-top: ${RFValue(20)}px;
`;

export const ArgusProviderCardWrapper = styled.View`
  padding-right: ${RFValue(29)}px;
`;

export const RelatedProviderList = styled(FlatList)`
  margin-top: ${RFValue(20)}px;
`;

export const RelatedProviderCardWrapper = styled.View`
  padding-bottom: ${RFValue(20)}px;
  height: ${RFValue(160)}px;
`;
