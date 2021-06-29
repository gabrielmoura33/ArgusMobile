import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';

import theme from '../../global/styles/theme';
import FavoriteMusicStyle from '../../modules/User/screens/FavoriteMusicStyle';
import SignIn from '../../modules/User/screens/SignIn';
import SignUp from '../../modules/User/screens/SignUp';
import UserIdentification from '../../modules/User/screens/UserIdentification';
import ChooseState from '../screens/ChooseState';
import { ProviderOnboarding } from '../screens/ProviderOnboarding';
import SocialLogin from '../screens/SocialLogin';
import UserBirthDate from '../screens/UserBirthDate';
import { UserOnboarding } from '../screens/UserOnboarding';

const OnboardingStack = createStackNavigator();

// const forFade = ({ current }: any) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });
const OnboardingRoutes: React.FC = () => (
  <OnboardingStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.Secondary },
      cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
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
    <OnboardingStack.Screen name="SignIn" component={SignIn} />
    <OnboardingStack.Screen name="SignUp" component={SignUp} />
    <OnboardingStack.Screen name="SocialLogin" component={SocialLogin} />
  </OnboardingStack.Navigator>
);

export default OnboardingRoutes;
