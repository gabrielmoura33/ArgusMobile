import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import theme from '../../global/styles/theme';
import { ProviderAuthRoutes } from '../../modules/Providers/routes/providers_auth.routes';
import UserBottomTabNavigator from '../../modules/User/routes/navigation/user_tabnavigator';
import UserOrganizerRoutes from '../../modules/User/routes/user.organizer.routes';
import { UserAuthRoutes } from '../../modules/User/routes/user_auth.routes';
import { useAccess } from '../hooks/access';
import { useAuth } from '../hooks/auth';
import NoConnection from '../screens/NoConnection';
import ChooseStateRoutes from './chooseState.routes';
import OnboardingRoutes from './onboarding.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  const { isFirstLaunch, appState } = useAccess();
  const netInfo = useNetInfo();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.Neutral100} />
      </View>
    );
  }

  if (netInfo.isConnected === false) return <NoConnection />;

  if (isFirstLaunch === true && !user.name && appState === 'default') {
    return <OnboardingRoutes />;
  }

  if (user && user.signed) {
    return <UserOrganizerRoutes />;
  }

  switch (appState) {
    case 'provider':
      return <ProviderAuthRoutes />;
    case 'user':
      return <UserAuthRoutes />;
    case 'default':
    default:
      return <ChooseStateRoutes />;
  }
};

export default Routes;
