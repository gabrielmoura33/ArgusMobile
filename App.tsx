/* eslint-disable global-require */
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { AppProvider } from './src/shared/hooks';
import Routes from './src/shared/routes';
import OnboardingRoutes from './src/shared/routes/onboarding.routes';
import { UserOnboarding } from './src/shared/screens/UserOnboarding';

const fetchFonts = () => {
  return Font.loadAsync({
    GothamBold: require('./src/assets/fonts/Gotham/GothamBold.ttf'),
    GothamBook: require('./src/assets/fonts/Gotham/GothamBook.ttf'),
    GothicA1: require('./src/assets/fonts/GothicA1/GothicA1-Bold.ttf'),
    Roboto_700Bold: require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
    Roboto_500Medium: require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    Roboto_400Regular: require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
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
          <OnboardingRoutes />
        </ThemeProvider>
      </AppProvider>
    </NavigationContainer>
  );
}
