import { useNavigation } from '@react-navigation/native';
import { isAfter } from 'date-fns';
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';

import ActionButton from '../../components/ActionButton';
import DatetimePickerComponent from '../../components/DatetimePicker';
import { UserIdentificationContainer, Container, Logo, Title } from './styles';

function UserBirthDate() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const navigator = useNavigation();

  function handleNextScreen() {
    return navigator.navigate('FavoriteMusicStyle');
  }

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') setShowDatePicker(oldState => !oldState);

    if (dateTime && isAfter(dateTime, new Date())) {
      Alert.alert(
        'Data inválida',
        'Favor escolher uma data anterior a data atual.',
      );
      return;
    }

    if (dateTime) setSelectedDateTime(dateTime);
  }

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }
  return (
    <Container>
      <Logo width={82} height={85} />
      <Title>Qual a sua data de {'\n'} nascimento?</Title>
      <UserIdentificationContainer>
        <DatetimePickerComponent
          selectedDateTime={selectedDateTime}
          handleChangeTime={handleChangeTime as any}
          handleOpenDatetimePickerForAndroid={
            handleOpenDatetimePickerForAndroid
          }
          showDatePicker={showDatePicker}
        />
        <ActionButton onPress={handleNextScreen}>Confirmar</ActionButton>
      </UserIdentificationContainer>
    </Container>
  );
}

export default UserBirthDate;
