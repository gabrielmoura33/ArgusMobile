import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';

import theme from '../../../global/styles/theme';
import SocialLogin from '../../../shared/screens/SocialLogin';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const UserAuth = createStackNavigator();

const UserAuthRoutes: React.FC = () => (
  <UserAuth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.DarkBackground },
      cardStyleInterpolator:
        Platform.OS === 'ios'
          ? CardStyleInterpolators.forHorizontalIOS
          : CardStyleInterpolators.forNoAnimation,
    }}
    initialRouteName="SocialLogin"
  >
    <UserAuth.Screen name="SocialLogin" component={SocialLogin} />

    <UserAuth.Screen name="SignIn" component={SignIn} />
    <UserAuth.Screen name="SignUp" component={SignUp} />
  </UserAuth.Navigator>
);

export { UserAuthRoutes };
