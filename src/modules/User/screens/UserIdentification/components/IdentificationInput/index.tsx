import React from 'react';
import { TextInputProps, Text } from 'react-native';

import { Container, Input } from './styles';

interface IdentificationInputProps extends TextInputProps {
  placeholder: string;
}

function IdentificationInput({
  placeholder,
  ...rest
}: IdentificationInputProps) {
  return (
    <Container>
      <Input placeholder={placeholder} {...rest} />
    </Container>
  );
}

export default IdentificationInput;
