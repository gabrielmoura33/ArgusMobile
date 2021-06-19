import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../../global/styles/theme';
import UserBirthDate from '../../../shared/screens/UserBirthDate';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import UserIdentification from '../screens/UserIdentification';

const UserAuth = createStackNavigator();

const UserAuthRoutes: React.FC = () => (
  <UserAuth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.primary },
    }}
    initialRouteName="UserBirthDate"
  >
    <UserAuth.Screen name="UserBirthDate" component={UserBirthDate} />
    <UserAuth.Screen name="UserIdentification" component={UserIdentification} />
    <UserAuth.Screen name="SignIn" component={SignIn} />
    <UserAuth.Screen name="SignUp" component={SignUp} />
  </UserAuth.Navigator>
);

export { UserAuthRoutes };
