/* eslint-disable default-case */
import moment from 'moment';
import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';

import theme from '../../../../../global/styles/theme';
import { Container, CalendarHeaderBadge } from './styles';

interface AndroidCalendarComponentProps {
  value: any;
  setValue: any;
  disabledDates?: Date[];
  onMonthChange?: any;
}

function AndroidCalendarComponent({
  value,
  setValue,
  onMonthChange,
  disabledDates,
}: AndroidCalendarComponentProps) {
  const customDayHeaderStylesCallback = ({
    dayOfWeek,
  }: {
    dayOfWeek: number;
  }) => {
    if (dayOfWeek === moment().day()) {
      return {
        style: {
          border: 0,
        },
        textStyle: {
          color: '#E06714',
        },
      };
    }

    return {
      style: {
        border: 0,
      },
      textStyle: {
        color: '#666360',
      },
    };
  };
  return (
    <Container>
      <CalendarHeaderBadge />
      <CalendarPicker
        onDateChange={setValue}
        weekdays={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
        months={[
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ]}
        width={312}
        height={362}
        previousTitle="<"
        nextTitle=">"
        textStyle={{
          fontFamily: theme.fonts.RobotoSlabMedium,
          color: '#F4EDE8',
        }}
        selectedDayStyle={{
          backgroundColor: theme.colors.primary,
          borderRadius: 5,
          width: 30,
          height: 30,
        }}
        dayShape="square"
        selectedDayTextColor="#FFF"
        scaleFactor={375}
        disabledDates={disabledDates}
        customDayHeaderStyles={customDayHeaderStylesCallback as any}
        disabledDatesTextStyle={{ color: '#666360' }}
        onMonthChange={onMonthChange}
        todayBackgroundColor="#181A20"
      />
    </Container>
  );
}

export { AndroidCalendarComponent };
