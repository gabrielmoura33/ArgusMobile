import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import theme from '../../../../global/styles/theme';
import SearchScreen from '../../screens/SearchScreen';

// import { Container } from './styles';
const Drawer = createDrawerNavigator();

const UserDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      openByDefault
      drawerStyle={{
        width: '115%',
        backgroundColor: theme.colors.Secondary,
        paddingRight: '15%',
        paddingTop: '10%',
      }}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        // activeTintColor: veganAppTheme.colors['green-700'],
        // inactiveTintColor: veganAppTheme.colors['neutral-100'],
        itemStyle: {
          borderBottomWidth: 0.5,
          borderColor: '#eee',
          padding: 5,
          marginTop: 10,
          width: '100%',
        },
        labelStyle: {
          // fontFamily: veganAppTheme.fonts['SFProRounded'],
          fontSize: 19,
          // fontWeight: "bold"
        },
      }}
    >
      <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
  );
};

export default UserDrawerNavigator;
