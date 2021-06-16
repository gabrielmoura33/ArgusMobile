import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../global/styles/theme';
import Onboarding from '../screens/Onboarding';

const OnboardingStack = createStackNavigator();

const OnboardingRoutes: React.FC = () => (
  <OnboardingStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.Primary },
    }}
  >
    <OnboardingStack.Screen name="Onboarding" component={Onboarding} />
  </OnboardingStack.Navigator>
);

export default OnboardingRoutes;
