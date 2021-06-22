import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import ExploreIcon from '../../../../assets/icons/explore.svg';
import GiftIcon from '../../../../assets/icons/gift.svg';
import UserProfileIcon from '../../../../assets/icons/userprofile.svg';
import theme from '../../../../global/styles/theme';
import ProfileScreen from '../../screens/ProfileScreen';
import SearchScreen from '../../screens/SearchScreen';

// import { Container } from './styles';
const Drawer = createDrawerNavigator();

const UserDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      openByDefault
      drawerStyle={{
        width: '100%',
        backgroundColor: theme.colors.Secondary,
        paddingTop: '30%',
      }}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: theme.colors.Neutral100,
        inactiveTintColor: theme.colors.Neutral100,
        itemStyle: {
          borderBottomWidth: 0.2,
          borderColor: theme.colors.Neutral200,
          borderRadius: 0,
          marginTop: 5,
          width: '60%',
        },
        labelStyle: {
          fontFamily: theme.fonts.RobotoBold,
          fontSize: RFValue(17),
          paddingVertical: 5,
        },
      }}
    >
      <Drawer.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          drawerIcon: ({ focused, size }) => (
            <UserProfileIcon
              width={size}
              height={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="UserExplore"
        component={ProfileScreen}
        options={{
          title: 'Explorar',
          drawerIcon: ({ focused, size }) => (
            <ExploreIcon
              width={size}
              height={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="UserWallet"
        component={ProfileScreen}
        options={{
          title: 'Minha carteira',
          drawerIcon: ({ focused, size }) => (
            <GiftIcon
              width={size}
              height={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default UserDrawerNavigator;
