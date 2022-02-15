import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

import animationJSON from '../../../assets/animations/loading.json';
import { Container } from './styles';

const LoadingComponent: React.FC = () => {
  return (
    <Container>
      <LottieView
        style={{
          width: 600,
          height: 600,

          //   justifySelf: 'center',
        }}
        source={animationJSON}
        autoPlay
        loop
      />
    </Container>
  );
};

export default LoadingComponent;
