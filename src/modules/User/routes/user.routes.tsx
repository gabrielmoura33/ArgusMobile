import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../../global/styles/theme';
import Dashboard from '../screens/Dashboard';

const User = createStackNavigator();

const UserRoutes: React.FC = () => (
  <User.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.Secondary },
    }}
    initialRouteName="Dashboard"
  >
    <User.Screen name="Dashboard" component={Dashboard} />
  </User.Navigator>
);

export default UserRoutes;
