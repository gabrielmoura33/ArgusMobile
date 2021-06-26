import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import theme from '../../global/styles/theme';
import ProviderRoutes from '../../modules/Providers/routes/providers.routes';
import { ProviderAuthRoutes } from '../../modules/Providers/routes/providers_auth.routes';
import UserBottomTabNavigator from '../../modules/User/routes/navigation/user_tabnavigator';
import UserRoutes from '../../modules/User/routes/user.routes';
import { UserAuthRoutes } from '../../modules/User/routes/user_auth.routes';
import { useAccess } from '../hooks/access';
import { useAuth } from '../hooks/auth';
import ChooseState from '../screens/ChooseState';
import NoConnection from '../screens/NoConnection';
import { UserOnboarding } from '../screens/UserOnboarding';
import ChooseStateRoutes from './chooseState.routes';
import OnboardingRoutes from './onboarding.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  const { isFirstLaunch, state } = useAccess();
  const netInfo = useNetInfo();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.Neutral100} />
      </View>
    );
  }

  // if (netInfo.isConnected === true) return <NoConnection />;

  if (isFirstLaunch !== false) {
    console.log(user);
    console.log(isFirstLaunch);
    console.log(state);
    return <OnboardingRoutes />;
  }

  if (user && user.signed) {
    return <UserBottomTabNavigator />;
  }

  switch (state) {
    case 'provider':
      console.log('provider');
      return <ProviderAuthRoutes />;
    case 'user':
      console.log('user');
      return <UserAuthRoutes />;
    default:
      console.log('ahjsbdha');
      return <ChooseStateRoutes />;
  }
};

export default Routes;
