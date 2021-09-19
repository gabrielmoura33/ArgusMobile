// import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';

import AmplifierIcon from '../../../../assets/icons/amplifier.svg';
import ClockIcon from '../../../../assets/icons/clock2.svg';
import PeopleIcon from '../../../../assets/icons/people.svg';
import ActionButton from '../../../../shared/components/ActionButton';
import { AndroidCalendarComponent } from '../../../../shared/components/CalendarComponent/components/AndroidCalendarComponent';
import ConfirmationModal from '../../../../shared/components/Modal/ConfirmationModal';
import NumberSliderModal from '../../../../shared/components/Modal/NumberSliderModal';
import HeaderSinglePage from '../../../../shared/screens/HeaderSinglePage';
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

interface AppointmentPageProps {}

function AppointmentPage() {
  const [audienceModalVisible, setAudienceModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [equipmentModalVisible, setEquipmentModalVisible] = useState(false);

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
          <ServiceSelectComponent />
          <ServiceSelectComponent />
          <ServiceSelectComponent />
        </ServicesWrapper>

        <ServiceSelectLabel>Selecione os detalhes serviço</ServiceSelectLabel>
        <ServiceSelectSubtitle>
          Escolha abaixo os detalhes do serviço Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eos cumque molestias molestiae
          architecto quos nam qui distinctio facere eligendi?
        </ServiceSelectSubtitle>
        <ServicesDetailWrapper>
          <ServicesBadgeComponent
            svg={PeopleIcon}
            title="Público"
            info="400 Pessoas"
            handleClick={() => setAudienceModalVisible(true)}
          />
          <ServicesBadgeComponent
            svg={ClockIcon}
            title="Duração"
            info="180 Minutos"
            handleClick={() => setTimeModalVisible(true)}
          />
          <ServicesBadgeComponent
            svg={AmplifierIcon}
            title="Equipamento Alugado"
            info="+ R$ 100,00"
            handleClick={() => setEquipmentModalVisible(true)}
          />
        </ServicesDetailWrapper>

        <AppointmentDateWrapper>
          <AppointmentDateLabel>Escolha a Data</AppointmentDateLabel>
          <AndroidCalendarComponent value={null} setValue={() => {}} />
        </AppointmentDateWrapper>

        <AppointmentDateLabel>Escolha o horário</AppointmentDateLabel>
        <AppointmentHourWrapper>
          <PeriodLabel>Manhã</PeriodLabel>
          <AvailableHourWrapper>
            <AvailableHour>
              <AvailableHourText>09:00</AvailableHourText>
            </AvailableHour>
            <AvailableHour isActive>
              <AvailableHourText>11:30</AvailableHourText>
            </AvailableHour>
            <AvailableHour>
              <AvailableHourText>12:00</AvailableHourText>
            </AvailableHour>
          </AvailableHourWrapper>
          <PeriodLabel>Tarde</PeriodLabel>
          <AvailableHourWrapper>
            <AvailableHour>
              <AvailableHourText>12:00</AvailableHourText>
            </AvailableHour>
            <AvailableHour>
              <AvailableHourText>13:30</AvailableHourText>
            </AvailableHour>
            <AvailableHour>
              <AvailableHourText>14:00</AvailableHourText>
            </AvailableHour>
            <AvailableHour>
              <AvailableHourText>15:00</AvailableHourText>
            </AvailableHour>
            <AvailableHour>
              <AvailableHourText>17:30</AvailableHourText>
            </AvailableHour>
          </AvailableHourWrapper>
          <PeriodLabel>Noite</PeriodLabel>
          <AvailableHourWrapper>
            <AvailableHour>
              <AvailableHourText>19:00</AvailableHourText>
            </AvailableHour>
            <AvailableHour>
              <AvailableHourText>19:30</AvailableHourText>
            </AvailableHour>
          </AvailableHourWrapper>
        </AppointmentHourWrapper>

        <NextButtonWrapper>
          <ActionButton>Próximo</ActionButton>
        </NextButtonWrapper>
      </HeaderSinglePage>

      <NumberSliderModal
        visible={timeModalVisible}
        setVisible={setTimeModalVisible}
        svg={ClockIcon}
        title="Informe a duração desejada para a apresentação"
      />
      <NumberSliderModal
        visible={audienceModalVisible}
        setVisible={setAudienceModalVisible}
        svg={PeopleIcon}
        title="Informe a quantidade de pessoas para a apresentação"
      />
      <ConfirmationModal
        visible={equipmentModalVisible}
        setVisible={setEquipmentModalVisible}
        svg={AmplifierIcon}
        title="O equipamento de som será alugado pelo próprio artista?"
      />
    </Wrapper>
  );
}

export { AppointmentPage };
