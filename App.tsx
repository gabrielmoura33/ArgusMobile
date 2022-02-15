/* eslint-disable global-require */
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as Linking from 'expo-linking';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { AppProvider } from './src/shared/hooks';
import Routes from './src/shared/routes';

const prefix = Linking.createURL('/');

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
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        UserTabs: 'home',
        ProviderProfile: 'profile',
      },
    },
  };

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
    <NavigationContainer linking={linking}>
      <AppProvider>
        <StripeProvider
          publishableKey="pk_test_51K0yhXCuchXickzYuxs6GY4qztkcCwv4UffS29AdfzbMy8M7ZlB4QwoMjxxhjMO7Cp8kv72fuAcV0oLy74ksY44c00jXci85qQ"
          merchantIdentifier="gabrielmourajs@gmail.com"
        >
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={theme.colors.Secondary}
            />
            <Routes />
          </ThemeProvider>
        </StripeProvider>
      </AppProvider>
    </NavigationContainer>
  );
}
