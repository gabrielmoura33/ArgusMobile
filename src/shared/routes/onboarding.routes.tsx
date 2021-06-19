import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../global/styles/theme';
import { ProviderOnboarding } from '../screens/ProviderOnboarding';
import { UserOnboarding } from '../screens/UserOnboarding';

const OnboardingStack = createStackNavigator();

const OnboardingRoutes: React.FC = () => (
  <OnboardingStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.primary },
    }}
  >
    <OnboardingStack.Screen name="UserOnboarding" component={UserOnboarding} />
    <OnboardingStack.Screen
      name="ProviderOnboarding"
      component={ProviderOnboarding}
    />
  </OnboardingStack.Navigator>
);

export default OnboardingRoutes;
