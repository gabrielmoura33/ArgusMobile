import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../global/styles/theme';
import ChooseState from '../screens/ChooseState';
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

    <OnboardingStack.Screen name="ChooseState" component={ChooseState} />
  </OnboardingStack.Navigator>
);

export default OnboardingRoutes;
