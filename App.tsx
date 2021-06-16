import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { AppProvider } from './src/shared/hooks';
import Routes from './src/shared/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.Primary}
        />
        <Routes />
        <ThemeProvider theme={theme} />
      </AppProvider>
    </NavigationContainer>
  );
}
