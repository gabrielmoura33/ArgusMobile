import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../../global/styles/theme';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const UserAuth = createStackNavigator();

const UserAuthRoutes: React.FC = () => (
  <UserAuth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.primary },
    }}
    initialRouteName="Sign"
  >
    <UserAuth.Screen name="SignIn" component={SignIn} />
    <UserAuth.Screen name="SignUp" component={SignUp} />
  </UserAuth.Navigator>
);

export { UserAuthRoutes };
