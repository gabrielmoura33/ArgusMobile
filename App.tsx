/* eslint-disable global-require */
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import UserBottomTabNavigator from './src/modules/User/routes/navigation/user_tabnavigator';
import UserRoutes from './src/modules/User/routes/user.routes';
import { AppProvider } from './src/shared/hooks';
import Routes from './src/shared/routes';
import NoConnection from './src/shared/screens/NoConnection';

const fetchFonts = () => {
  return Font.loadAsync({
    GothamBold: require('./src/assets/fonts/Gotham/GothamBold.ttf'),
    GothamBook: require('./src/assets/fonts/Gotham/GothamBook.ttf'),
    GothicA1: require('./src/assets/fonts/GothicA1/GothicA1-Bold.ttf'),
    Roboto_700Bold: require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
    Roboto_500Medium: require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    Roboto_400Regular: require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    RobotoSlab_Medium: require('./src/assets/fonts/Roboto/RobotoSlab-Medium.ttf'),
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => setDataLoaded(false)}
      />
    );
  }

  return (
    <NavigationContainer>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.Secondary}
          />
          <NoConnection />
        </ThemeProvider>
      </AppProvider>
    </NavigationContainer>
  );
}
