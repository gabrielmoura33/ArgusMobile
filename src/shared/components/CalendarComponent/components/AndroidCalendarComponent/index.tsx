/* eslint-disable default-case */
import moment from 'moment';
import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';

import theme from '../../../../../global/styles/theme';
import { Container, CalendarHeaderBadge } from './styles';

interface AndroidCalendarComponentProps {
  value: any;
  setValue: () => void;
}

function AndroidCalendarComponent({
  value,
  setValue,
}: AndroidCalendarComponentProps) {
  const customDayHeaderStylesCallback = ({
    dayOfWeek,
  }: {
    dayOfWeek: number;
  }) => {
    if (dayOfWeek === 7 - moment(new Date()).day()) {
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
        onDateChange={() => {}}
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
        disabledDates={[
          new Date(2021, 8, 1),
          new Date(2021, 8, 2),
          new Date(2021, 8, 4),
          new Date(2021, 8, 5),
          new Date(2021, 8, 7),
          new Date(2021, 8, 8),
          new Date(2021, 8, 9),
          new Date(2021, 8, 13),
          new Date(2021, 8, 15),
          new Date(2021, 8, 17),
          new Date(2021, 8, 19),
          new Date(2021, 8, 21),
          new Date(2021, 8, 23),
          new Date(2021, 8, 25),
          new Date(2021, 8, 26),
          new Date(2021, 8, 30),
        ]}
        customDayHeaderStyles={customDayHeaderStylesCallback as any}
        disabledDatesTextStyle={{ color: '#666360' }}
      />
    </Container>
  );
}

export { AndroidCalendarComponent };
