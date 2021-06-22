import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

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
          borderBottomWidth: 0.3,
          borderColor: '#F4F4F8',
          padding: 2,
          marginTop: 10,

          width: '50%',
        },
        labelStyle: {
          fontFamily: theme.fonts.RobotoBold,
          fontSize: RFValue(17),
          // fontWeight: "bold"
        },
      }}
    >
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Explorar" component={ProfileScreen} />
      <Drawer.Screen name="Minha carteira" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default UserDrawerNavigator;
