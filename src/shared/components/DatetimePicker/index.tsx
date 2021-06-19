import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import React, { ReactNode, useState } from 'react';
import { Platform, Text } from 'react-native';

import theme from '../../../global/styles/theme';
import { Container, DateTimePickerButton, DateTimePickerText } from './styles';

function DatetimePickerComponent() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  return (
    <Container>
      <DateTimePicker
        value={selectedDateTime}
        mode="date"
        display="spinner"
        textColor={theme.colors.Neutral700}
        // onChange={handleChangeTime}
      />
    </Container>
  );
}

export default DatetimePickerComponent;
