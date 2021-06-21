import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import BellIcon from '../../../../assets/icons/bell.svg';
import HomeIcon from '../../../../assets/icons/home.svg';
import SearchIcon from '../../../../assets/icons/search.svg';
import HeartIcon from '../../../../assets/icons/union.svg';
import UserIcon from '../../../../assets/icons/user.svg';
import theme from '../../../../global/styles/theme';
import SearchScreen from '../../screens/SearchScreen';
import MainStackNavigator from '../user.routes';

const Tab = createBottomTabNavigator();

// import { Container } from './styles';

const UserBottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: RFValue(77),
          backgroundColor: theme.colors.Dark500,
          borderTopWidth: 0,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 80,
          height: 80,
        },
        inactiveBackgroundColor: 'transparent',
        activeBackgroundColor: 'transparent',
        activeTintColor: theme.colors.primary,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <HomeIcon
                width={size}
                height={size}
                color={focused ? theme.colors.primary : theme.colors.Neutral100}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <SearchIcon
                width={size}
                height={size}
                color={focused ? theme.colors.primary : theme.colors.Neutral100}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Heart"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <HeartIcon
                width={size}
                height={size}
                color={focused ? theme.colors.primary : theme.colors.Neutral100}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <BellIcon
                width={size}
                height={size}
                color={focused ? theme.colors.primary : theme.colors.Neutral100}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <UserIcon
                width={size}
                height={size}
                color={focused ? theme.colors.primary : theme.colors.Neutral100}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTabNavigator;
