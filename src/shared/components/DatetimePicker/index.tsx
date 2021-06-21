import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';

import { useAuth } from '../../hooks/auth';
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
  const [textColor, setTextColor] = useState('black');

  const iOsColorFix = () => {
    setTimeout(() => {
      setTextColor(prevState => (prevState === 'green' ? 'black' : 'white')); // It is important to change the textColor state on some different value
    }, 0);
  };

  useEffect(() => {
    iOsColorFix();
  }, []);

  return (
    <Container>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode="date"
          display="spinner"
          textColor={textColor}
          onChange={handleChangeTime}
          themeVariant="light"
          locale="pt-Br"
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
