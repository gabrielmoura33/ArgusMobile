import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../../global/styles/theme';

const User = createStackNavigator();

const UserRoutes: React.FC = () => (
  <User.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.primary },
    }}
    initialRouteName="Sign"
  >
    {/* <User.Screen name="SignIn" component={Sign} /> */}
  </User.Navigator>
);

export default UserRoutes;
