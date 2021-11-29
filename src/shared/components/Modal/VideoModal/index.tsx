/* eslint-disable @typescript-eslint/no-use-before-define */

import { Video } from 'expo-av';
import React, { useRef, useEffect } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  Title,
  ModalHeader,
  ModalContent,
  ConfirmationWrapper,
  CustomActionButton,
} from './styles';

interface VideoModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  play: boolean;
}

function VideoModal({ visible, setVisible, play }: VideoModalProps) {
  function handleCloseModal() {
    setVisible(false);
  }

  const videoRef = useRef(null);

  // useEffect(() => {
  //   videoRef.current.playAsync();
  // }, [play]);
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <Container onLongPress={handleCloseModal}>
        <ModalContent>
          <Video
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            ref={videoRef}
            useNativeControls
            resizeMode="contain"
            isLooping
            style={styles.video}
          />
        </ModalContent>
      </Container>
    </Modal>
  );
}
const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
export default VideoModal;
