import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import theme from '../../global/styles/theme';
import FavoriteMusicStyle from '../../modules/User/screens/FavoriteMusicStyle';
import UserIdentification from '../../modules/User/screens/UserIdentification';
import ChooseState from '../screens/ChooseState';
import { ProviderOnboarding } from '../screens/ProviderOnboarding';
import SocialLogin from '../screens/SocialLogin';
import UserBirthDate from '../screens/UserBirthDate';
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
    <OnboardingStack.Screen name="ChooseState" component={ChooseState} />
    <OnboardingStack.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <OnboardingStack.Screen name="UserBirthDate" component={UserBirthDate} />
    <OnboardingStack.Screen
      name="FavoriteMusicStyle"
      component={FavoriteMusicStyle}
    />
    <OnboardingStack.Screen name="SocialLogin" component={SocialLogin} />
  </OnboardingStack.Navigator>
);

export default OnboardingRoutes;
