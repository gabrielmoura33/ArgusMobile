import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgProps } from 'react-native-svg';

import CasamentoSVG from '../../../../assets/images/search_buttons/casamento.svg';
import SVG1 from '../../../../assets/images/search_buttons/svg1.svg';
import SVG2 from '../../../../assets/images/search_buttons/svg2.svg';
import SVG3 from '../../../../assets/images/search_buttons/svg3.svg';
import SVG4 from '../../../../assets/images/search_buttons/svg4.svg';
import SVG5 from '../../../../assets/images/search_buttons/svg5.svg';
import { ProviderService } from '../../../../shared/services/Provider.service';
import {
  Container,
  SearchInputWrapper,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  SearchBodyWrapper,
  SearchSection,
  SearchSectionTitle,
  SearchBoxContainer,
  SearchBox,
  SearchBoxRow,
} from './styles';
// interface SearchScreenProps {}

function SearchScreen() {
  const { navigate } = useNavigation();
  const handleFilterByCategory = async (category: string) => {
    try {
      const providers = await ProviderService.fetchProviders({
        category,
      });
      navigate('SearchResult', { providers, name: category });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <SearchInputWrapper>
        <SearchInputContainer>
          <SearchIcon name="search" size={21} />

          <SearchInput
            placeholder="Pesquisar"
            placeholderTextColor="#FFFF"
            returnKeyType="search"
          />
        </SearchInputContainer>
      </SearchInputWrapper>

      <SearchBodyWrapper>
        <SearchSection>
          <SearchSectionTitle>Ideias para você</SearchSectionTitle>
          <SearchBoxContainer>
            <SearchBoxRow>
              <SearchBox onPress={() => handleFilterByCategory('Clássica')}>
                <SVG1 width="100%" height={100} />
              </SearchBox>
              <SearchBox onPress={() => handleFilterByCategory('Casamento')}>
                <CasamentoSVG width="100%" height={100} />
              </SearchBox>
            </SearchBoxRow>
          </SearchBoxContainer>
        </SearchSection>

        <SearchSection>
          <SearchSectionTitle>Busque por gênero musical</SearchSectionTitle>
          <SearchBoxContainer>
            <SearchBoxRow>
              <SearchBox onPress={() => handleFilterByCategory('Clássica')}>
                <SVG1 width="100%" height={100} />
              </SearchBox>
              <SearchBox onPress={() => handleFilterByCategory('Forró')}>
                <SVG5 width="100%" height={100} />
              </SearchBox>
            </SearchBoxRow>
            <SearchBoxRow>
              <SearchBox onPress={() => handleFilterByCategory('Rock')}>
                <SVG2 width="100%" height={100} />
              </SearchBox>
              <SearchBox onPress={() => handleFilterByCategory('Axé')}>
                <SVG3 width="100%" height={100} />
              </SearchBox>
            </SearchBoxRow>
            <SearchBoxRow>
              <SearchBox onPress={() => handleFilterByCategory('Eletronica')}>
                <SVG4 width="100%" height={100} />
              </SearchBox>
            </SearchBoxRow>
          </SearchBoxContainer>
        </SearchSection>
      </SearchBodyWrapper>
    </Container>
  );
}

export default SearchScreen;
