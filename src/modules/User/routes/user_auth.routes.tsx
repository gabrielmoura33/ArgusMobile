import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../../global/styles/theme';
import ChooseState from '../../../shared/screens/ChooseState';
import UserBirthDate from '../../../shared/screens/UserBirthDate';
import FavoriteMusicStyle from '../screens/FavoriteMusicStyle';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import UserIdentification from '../screens/UserIdentification';

const UserAuth = createStackNavigator();

const UserAuthRoutes: React.FC = () => (
  <UserAuth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.DarkBackground },
    }}
    initialRouteName="UserBirthDate"
  >
    <UserAuth.Screen name="ChooseState" component={ChooseState} />
    <UserAuth.Screen name="FavoriteMusicStyle" component={FavoriteMusicStyle} />
    <UserAuth.Screen name="UserBirthDate" component={UserBirthDate} />
    <UserAuth.Screen name="UserIdentification" component={UserIdentification} />
    <UserAuth.Screen name="SignIn" component={SignIn} />
    <UserAuth.Screen name="SignUp" component={SignUp} />
  </UserAuth.Navigator>
);

export { UserAuthRoutes };
