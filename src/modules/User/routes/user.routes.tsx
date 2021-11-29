import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';

import theme from '../../../global/styles/theme';
import CategoryList from '../screens/CategoryList';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';

const User = createStackNavigator();

const UserRoutes: React.FC = () => (
  <User.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.Secondary },
      cardStyleInterpolator:
        Platform.OS === 'ios'
          ? CardStyleInterpolators.forHorizontalIOS
          : CardStyleInterpolators.forFadeFromBottomAndroid,
    }}
    initialRouteName="Dashboard"
  >
    <User.Screen name="Dashboard" component={Dashboard} />
    <User.Screen name="SearchScreen" component={SearchScreen} />
    <User.Screen name="ProfileStack" component={Profile} />
    <User.Screen name="CategoryList" component={CategoryList} />
  </User.Navigator>
);

export default UserRoutes;
