import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

import theme from '../../../global/styles/theme';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const ProviderAuth = createStackNavigator();
const ProviderAuthRoutes: React.FC = () => {
  return (
    <ProviderAuth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.Primary },
      }}
      initialRouteName="Sign"
    >
      <ProviderAuth.Screen name="SignIn" component={SignIn} />
      <ProviderAuth.Screen name="SignUp" component={SignUp} />
    </ProviderAuth.Navigator>
  );
};

export { ProviderAuthRoutes };
