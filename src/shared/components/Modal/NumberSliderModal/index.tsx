/* eslint-disable @typescript-eslint/no-use-before-define */
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import { SvgProps } from 'react-native-svg';

import ActionButton from '../../ActionButton';
import { Container, Title, ModalHeader, ModalContent, Label } from './styles';

interface NumberSliderModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  svg: React.FC<SvgProps>;
  title: string;
}

function NumberSliderModal({
  visible,
  setVisible,
  svg: Svg,
  title,
}: NumberSliderModalProps) {
  const [sliderValue, setSliderValue] = useState(0);

  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <Container>
        <ModalContent>
          <ModalHeader>
            <Svg width={50} height={50} />
            <Title>{title}</Title>
          </ModalHeader>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={60}
            maximumValue={300}
            minimumTrackTintColor="#E06714"
            maximumTrackTintColor="#181A20"
            onValueChange={value => setSliderValue(Math.floor(value))}
          />
          <Label>{sliderValue} Minutos</Label>
          <ActionButton onPress={handleCloseModal}>Confirmar</ActionButton>
        </ModalContent>
      </Container>
    </Modal>
  );
}

export default NumberSliderModal;
