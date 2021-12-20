import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';

import theme from '../../../global/styles/theme';
import AppointmentCreated from '../screens/AppointmentCreated';
import { AppointmentPage } from '../screens/AppointmentPage';
import CheckoutPage from '../screens/Payment/Checkout';
import ProviderProfile from '../screens/ProviderProfile';
import UserBottomTabNavigator from './navigation/user_tabnavigator';

const UserOrganizer = createStackNavigator();

const UserOrganizerRoutes: React.FC = () => (
  <UserOrganizer.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.Secondary },
      cardStyleInterpolator:
        Platform.OS === 'ios'
          ? CardStyleInterpolators.forNoAnimation
          : CardStyleInterpolators.forFadeFromBottomAndroid,
    }}
    initialRouteName="UserTabs"
  >
    <UserOrganizer.Screen name="UserTabs" component={UserBottomTabNavigator} />
    <UserOrganizer.Screen
      name="ProviderProfile"
      component={ProviderProfile}
      options={{
        cardStyleInterpolator:
          Platform.OS === 'ios'
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
    <UserOrganizer.Screen
      name="CreateAppointment"
      component={AppointmentPage}
      options={{
        cardStyleInterpolator:
          Platform.OS === 'ios'
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
    <UserOrganizer.Screen
      name="AppointmentCreated"
      component={AppointmentCreated}
      options={{
        cardStyleInterpolator:
          Platform.OS === 'ios'
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
    <UserOrganizer.Screen
      name="CheckoutPage"
      component={CheckoutPage}
      options={{
        cardStyleInterpolator:
          Platform.OS === 'ios'
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
  </UserOrganizer.Navigator>
);

export default UserOrganizerRoutes;
