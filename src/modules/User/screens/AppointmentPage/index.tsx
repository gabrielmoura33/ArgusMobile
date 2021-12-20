import { useNavigation } from '@react-navigation/native';
import { getDate, getMonth, getYear, format, getDaysInMonth } from 'date-fns';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Alert } from 'react-native';

import AmplifierIcon from '../../../../assets/icons/amplifier.svg';
import ClockIcon from '../../../../assets/icons/clock2.svg';
import ParkIcon from '../../../../assets/icons/park.svg';
import PeopleIcon from '../../../../assets/icons/people.svg';
import ActionButton from '../../../../shared/components/ActionButton';
import { AndroidCalendarComponent } from '../../../../shared/components/CalendarComponent/components/AndroidCalendarComponent';
import ConfirmationModal from '../../../../shared/components/Modal/ConfirmationModal';
import NumberSliderModal from '../../../../shared/components/Modal/NumberSliderModal';
import { Service } from '../../../../shared/entities/Services';
import HeaderSinglePage from '../../../../shared/screens/HeaderSinglePage';
import api from '../../../../shared/services/api';
import { useProviderContext } from '../../hooks/providers.context';
import { ServiceSelectComponent } from './components/ServiceSelectComponent';
import { ServicesBadgeComponent } from './components/ServicesBadgeComponent';
import {
  Wrapper,
  ServicesWrapper,
  ServicesDetailWrapper,
  ServiceSelectLabel,
  ServiceSelectSubtitle,
  AppointmentDateWrapper,
  AppointmentDateLabel,
  AppointmentHourWrapper,
  PeriodLabel,
  AvailableHourWrapper,
  AvailableHour,
  AvailableHourText,
  NextButtonWrapper,
} from './styles';

interface DayAvailability {
  hour: number;
  available: boolean;
}
interface MonthAvailability {
  day: number;
  available: boolean;
}
function AppointmentPage() {
  const { navigate } = useNavigation();
  const { selectedProvider } = useProviderContext();
  const [audienceModalVisible, setAudienceModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [equipmentModalVisible, setEquipmentModalVisible] = useState(false);
  const [ambientModalVisible, setAmbientModalVisible] = useState(false);

  const [audienceValue, setAudienceValue] = useState<number>(10);
  const [durationValue, setDurationValue] = useState<number>(30);
  const [equipmentValue, setEquipmentValue] = useState<boolean>(false);
  const [ambientValue, setAmbientValue] = useState<boolean>(false);

  const [audienceMaxValue, setAudienceMaxValue] = useState<number>(0);
  const [durationMaxValue, setDurationMaxValue] = useState<number>(0);

  const [audienceMinValue, setAudienceMinValue] = useState<number>(0);
  const [durationMinValue, setDurationMinValue] = useState<number>(0);

  const [selectedService, setSelectedService] = useState<Service>(
    selectedProvider.services ? selectedProvider.services[0] : ({} as Service),
  );

  const [selectedHourId, setSelectedHourId] = useState<number>(0);

  const addonsRenderProps = {
    PUBLIC: {
      svg: PeopleIcon,
      title: 'Público',
      info: `${audienceValue} Pessoas`,
      handleClick: (maxValue: number, minValue: number) => {
        setAudienceModalVisible(true);
        setAudienceMaxValue(maxValue);
        setAudienceMinValue(minValue);
      },
      isActive: audienceValue > 10,
      price: 0,
    },
    DURATION: {
      svg: ClockIcon,
      title: 'Duração',
      info: `${durationValue} Minutos`,
      handleClick: (maxValue: number, minValue: number) => {
        setTimeModalVisible(true);
        setDurationMaxValue(maxValue);
        setDurationMinValue(minValue);
      },
      isActive: durationValue > 30,
      price: 0,
    },
    EQUIPMENT: {
      svg: AmplifierIcon,
      title: 'Equipamento Alugado',
      info: `+ R$ ${
        selectedService.serviceAddons?.find(el => el.type === 'EQUIPMENT')
          ?.price
      },00`,
      handleClick: () => setEquipmentModalVisible(true),
      isActive: equipmentValue,
      price: 0,
    },
    AMBIENT: {
      svg: ParkIcon,
      title: 'Ambiente Aberto',
      info: `+ R$ ${
        selectedService.serviceAddons?.find(el => el.type === 'AMBIENT')?.price
      },00`,
      handleClick: () => setAmbientModalVisible(true),
      isActive: ambientValue,
      price: 0,
    },
  };

  const [month, setMonth] = useState(getMonth(new Date()) + 1);
  const [day, setDay] = useState(getDate(new Date()));
  const [year, setYear] = useState(getYear(new Date()));
  const [unavailableDays, setUnavailabledays] = useState<Date[]>([]);

  useEffect(() => {
    async function fetchMonthAvailability() {
      try {
        const response = await api.post(
          `api/v1/providers/${selectedProvider.id}/month-availability`,
          {
            month,
            year,
          },
        );
        const { data } = response;
        const unavailableDaysConvert = data
          .filter((el: any) => !el.available)
          .map((el: MonthAvailability) => new Date(year, month - 1, el.day));
        // const beforeDates = getDaysInMonth(new Date(year, month - 1, day));
        // const numberValue = beforeDates - day;
        // for (let index = 1; index < numberValue; index++) {
        //   unavailableDaysConvert.push(new Date(year, month - 1, index));
        // }
        // console.log(beforeDates);
        setUnavailabledays(unavailableDaysConvert);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMonthAvailability();
  }, [month, selectedProvider.id, year]);

  function handleChangeDate(date: any) {
    const selectedMonth = getMonth(Date.parse(date));
    const selectedDay = getDate(Date.parse(date));
    const selectedYear = getYear(Date.parse(date));

    setMonth(selectedMonth + 1);
    setDay(selectedDay);
    setYear(selectedYear);
  }

  const [availableHours, setAvailableHours] = useState<DayAvailability[]>([]);
  useEffect(() => {
    async function fetchDayHoursAvailability() {
      try {
        const response = await api.post(
          `api/v1/providers/${selectedProvider.id}/day-availability`,
          {
            month,
            year,
            day,
          },
        );
        const { data } = response;

        setAvailableHours(data.filter((el: DayAvailability) => el.available));
      } catch (error) {
        console.log(error);
      }
    }
    fetchDayHoursAvailability();
  }, [day, month, selectedProvider.id, year]);

  const morningAvailability = useMemo(() => {
    return availableHours
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => ({
        hour,
        hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        available,
      }));
  }, [availableHours]);

  const afternoonAvailability = useMemo(() => {
    return availableHours
      .filter(({ hour }) => hour >= 12 && hour < 18)
      .map(({ hour, available }) => ({
        hour,
        hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        available,
      }));
  }, [availableHours]);

  const nightAvailability = useMemo(() => {
    return availableHours
      .filter(({ hour }) => hour >= 18)
      .map(({ hour, available }) => ({
        hour,
        hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        available,
      }));
  }, [availableHours]);

  const calculateFinalPrice = () => {
    const { serviceAddons, price: totalPrice } = selectedService;

    const ambientPrice = ambientValue
      ? serviceAddons.find(el => el.type === 'AMBIENT')?.price
      : 0;
    const equipmentPrice = equipmentValue
      ? serviceAddons.find(el => el.type === 'EQUIPMENT')?.price
      : 0;

    return totalPrice + (ambientPrice || 0) + (equipmentPrice || 0);
  };
  const handleCreateAppointment = async () => {
    try {
      const date = new Date(year, month - 1, day);

      date.setHours(selectedHourId);
      date.setMinutes(0);

      const finalPrice = calculateFinalPrice();
      const response = await api.post('/api/v1/appointments', {
        provider_id: selectedProvider.id,
        date,
        service_id: selectedService.id,
        scheduled_time: durationValue,
        open_environment: ambientValue,
        rented_equipment: equipmentValue,
        final_price: finalPrice,
      });

      const { data } = response;
      const paymentInfo = {
        appointmentId: data.id,
        finalPrice,
        servicePrice: selectedService.price,
        serviceAddons: selectedService.serviceAddons,
        open_environment: ambientValue,
        rented_equipment: equipmentValue,
        date: date.getTime(),
        serviceName: selectedService.name,
        final_price: finalPrice,
      };

      navigate('CheckoutPage', paymentInfo);
    } catch (err) {
      Alert.alert(
        'Erro ao criar agendamento',
        'Ocorreu ao tentar criar o agendamento, tente novamente',
      );
    }
  };
  // useEffect(() => {
  //   console.log({ equipmentValue, ambientValue });
  // }, [equipmentValue, ambientValue]);
  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <HeaderSinglePage title="Agendamento">
        <ServiceSelectLabel>Selecione o serviço</ServiceSelectLabel>

        <ServicesWrapper
          horizontal
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          showsHorizontalScrollIndicator={false}
        >
          {selectedProvider.services?.map(el => {
            return (
              <ServiceSelectComponent
                key={el.id}
                name={el.name}
                image={{ uri: el.category.image_url }}
                isActive={selectedService?.id === el.id}
                onPress={() => setSelectedService(el)}
              />
            );
          })}
        </ServicesWrapper>

        <ServiceSelectLabel>Selecione os detalhes serviço</ServiceSelectLabel>
        <ServiceSelectSubtitle>
          Escolha abaixo os detalhes do serviço Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eos cumque molestias molestiae
          architecto quos nam qui distinctio facere eligendi?
        </ServiceSelectSubtitle>
        <ServicesDetailWrapper
          style={{
            justifyContent:
              selectedService.serviceAddons.length === 2
                ? 'space-around'
                : 'space-between',
          }}
        >
          {selectedService.serviceAddons.map(addon => (
            <ServicesBadgeComponent
              key={addon.id}
              svg={addonsRenderProps[addon.type].svg}
              title={addonsRenderProps[addon.type].title}
              info={addonsRenderProps[addon.type].info}
              handleClick={() =>
                addonsRenderProps[addon.type].handleClick(
                  addon.max_value,
                  addon.min_value,
                ) as any
              }
              isActive={addonsRenderProps[addon.type].isActive || addon.default}
            />
          ))}
        </ServicesDetailWrapper>

        <AppointmentDateWrapper>
          <AppointmentDateLabel>Escolha a Data</AppointmentDateLabel>
          <AndroidCalendarComponent
            value={null}
            setValue={handleChangeDate}
            onMonthChange={handleChangeDate}
            disabledDates={unavailableDays}
          />
        </AppointmentDateWrapper>

        <AppointmentDateLabel>Escolha o horário</AppointmentDateLabel>
        <AppointmentHourWrapper>
          <PeriodLabel>Manhã</PeriodLabel>
          <AvailableHourWrapper>
            {morningAvailability.map(el => (
              <AvailableHour
                key={el.hour}
                isActive={selectedHourId === el.hour}
                onPress={() => setSelectedHourId(el.hour)}
              >
                <AvailableHourText>{el.hourFormatted}</AvailableHourText>
              </AvailableHour>
            ))}
          </AvailableHourWrapper>

          <PeriodLabel>Tarde</PeriodLabel>
          <AvailableHourWrapper>
            {afternoonAvailability.map(el => (
              <AvailableHour
                key={el.hour}
                isActive={selectedHourId === el.hour}
                onPress={() => setSelectedHourId(el.hour)}
              >
                <AvailableHourText>{el.hourFormatted}</AvailableHourText>
              </AvailableHour>
            ))}
          </AvailableHourWrapper>
          <PeriodLabel>Noite</PeriodLabel>
          <AvailableHourWrapper>
            {nightAvailability.map(el => (
              <AvailableHour
                key={el.hour}
                isActive={selectedHourId === el.hour}
                onPress={() => setSelectedHourId(el.hour)}
              >
                <AvailableHourText>{el.hourFormatted}</AvailableHourText>
              </AvailableHour>
            ))}
          </AvailableHourWrapper>
        </AppointmentHourWrapper>

        <NextButtonWrapper>
          <ActionButton onPress={handleCreateAppointment}>Agendar</ActionButton>
        </NextButtonWrapper>
      </HeaderSinglePage>

      <NumberSliderModal
        visible={timeModalVisible}
        setVisible={setTimeModalVisible}
        svg={ClockIcon}
        label="Minutos"
        title="Informe a duração desejada para a apresentação"
        value={durationValue}
        setSliderValue={setDurationValue}
        sliderMaxValue={durationMaxValue}
        sliderMinValue={durationMinValue}
      />
      <NumberSliderModal
        visible={audienceModalVisible}
        setVisible={setAudienceModalVisible}
        svg={PeopleIcon}
        title="Informe a quantidade de pessoas para a apresentação"
        value={audienceValue}
        setSliderValue={setAudienceValue}
        sliderMaxValue={audienceMaxValue}
        sliderMinValue={audienceMinValue}
        label="Pessoas"
      />
      <ConfirmationModal
        visible={equipmentModalVisible}
        setVisible={setEquipmentModalVisible}
        svg={AmplifierIcon}
        title="O equipamento de som será alugado pelo próprio artista?"
        setValue={setEquipmentValue}
      />
      <ConfirmationModal
        visible={ambientModalVisible}
        setVisible={setAmbientModalVisible}
        svg={ParkIcon}
        title="O ambiente da apresentação será um ambiente aberto?"
        setValue={setAmbientValue}
      />
    </Wrapper>
  );
}

export { AppointmentPage };
