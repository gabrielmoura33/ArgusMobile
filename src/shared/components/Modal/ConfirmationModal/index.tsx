/* eslint-disable @typescript-eslint/no-use-before-define */
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import { SvgProps } from 'react-native-svg';

import ActionButton from '../../ActionButton';
import {
  Container,
  Title,
  ModalHeader,
  ModalContent,
  ConfirmationWrapper,
  CustomActionButton,
} from './styles';

interface ConfirmationModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  svg: React.FC<SvgProps>;
  title: string;
}

function ConfirmationModal({
  visible,
  setVisible,
  svg: Svg,
  title,
}: ConfirmationModalProps) {
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
          <ConfirmationWrapper>
            <CustomActionButton onPress={handleCloseModal}>
              Sim
            </CustomActionButton>
            <CustomActionButton isSecondary onPress={handleCloseModal}>
              Não
            </CustomActionButton>
          </ConfirmationWrapper>
        </ModalContent>
      </Container>
    </Modal>
  );
}

export default ConfirmationModal;
