/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import { Modal } from 'react-native';
import { SvgProps } from 'react-native-svg';

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
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConfirmationModal({
  visible,
  setVisible,
  svg: Svg,
  title,
  setValue,
}: ConfirmationModalProps) {
  function handleCloseModal() {
    setVisible(false);
  }

  function handleChooseValue(value: boolean) {
    setValue(value);
    handleCloseModal();
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
            <CustomActionButton onPress={() => handleChooseValue(true)}>
              Sim
            </CustomActionButton>
            <CustomActionButton
              isSecondary
              onPress={() => handleChooseValue(false)}
            >
              Não
            </CustomActionButton>
          </ConfirmationWrapper>
        </ModalContent>
      </Container>
    </Modal>
  );
}

export default ConfirmationModal;
