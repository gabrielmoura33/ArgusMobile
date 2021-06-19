import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Container, DateTimePickerButton, DateTimePickerText } from './styles';

function DatetimePickerComponent() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') setShowDatePicker(oldState => !oldState);

    if (dateTime) setSelectedDateTime(dateTime);
  }
  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }
  return (
    <Container>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode="date"
          display="spinner"
          textColor="#FFF"
          onChange={handleChangeTime}
        />
      )}
      {Platform.OS === 'android' && (
        <DateTimePickerButton
          onPress={() => handleOpenDatetimePickerForAndroid()}
        >
          <DateTimePickerText>
            Selecione uma data: {'\n'}
            {selectedDateTime && format(selectedDateTime, 'dd / MM / yyyy')}
          </DateTimePickerText>
        </DateTimePickerButton>
      )}
    </Container>
  );
}

export default DatetimePickerComponent;
