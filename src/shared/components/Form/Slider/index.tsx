/*
*  @implement: Implementar slider utilizando unform
/*
/*

import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface SliderComponentProps {
  children: ReactNode;
}

function SliderComponent({ children }: SliderComponentProps) {
  return (
    <Container></Container>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={sliderMinValue}
        maximumValue={sliderMaxValue}
        minimumTrackTintColor="#E06714"
        maximumTrackTintColor="#181A20"
        onValueChange={valueChange => setSliderValue(Math.floor(valueChange))}
      />

  );
}

export default SliderComponent;
*/
