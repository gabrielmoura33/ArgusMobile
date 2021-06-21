import React from 'react';

import theme from '../../../global/styles/theme';
import { Container, WifiIcon, WifiText, WifiTextSmall } from './styles';

const NoConnection: React.FC = () => {
  return (
    <Container>
      <WifiIcon name="wifi-off" size={133} color={theme.colors.Neutral500} />
      <WifiText>Parece que você está sem {'\n'} conexão</WifiText>
      <WifiTextSmall>Verifique sua internet e tente outra vez...</WifiTextSmall>
    </Container>
  );
};

export default NoConnection;
