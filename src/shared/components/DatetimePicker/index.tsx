import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import React from 'react';
import { Platform } from 'react-native';

import { Container, DateTimePickerButton, DateTimePickerText } from './styles';

interface DatetimePickerComponentProps {
  selectedDateTime: Date;
  handleChangeTime(event: Event, dateTime: Date | undefined): void;
  handleOpenDatetimePickerForAndroid(): void;
  showDatePicker: boolean;
}
function DatetimePickerComponent({
  selectedDateTime,
  handleChangeTime,
  handleOpenDatetimePickerForAndroid,
  showDatePicker,
}: DatetimePickerComponentProps) {
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
