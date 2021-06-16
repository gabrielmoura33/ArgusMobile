import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import theme from '../../global/styles/theme';
import ProviderRoutes from '../../modules/Providers/routes/providers.routes';
import { ProviderAuthRoutes } from '../../modules/Providers/routes/providers_auth.routes';
import UserRoutes from '../../modules/User/routes/user.routes';
import { UserAuthRoutes } from '../../modules/User/routes/user_auth.routes';
import { useAccess } from '../hooks/access';
import { useAuth } from '../hooks/auth';
import ChooseState from '../screens/ChooseState';
import OnboardingRoutes from './onboarding.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  const { isFirstLaunch, state } = useAccess();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.Neutral100} />
      </View>
    );
  }

  if (isFirstLaunch) {
    <OnboardingRoutes />;
  }

  if (!state) {
    <ChooseState />;
  }

  if (user) {
    switch (user.isProvider) {
      case true:
        return <ProviderRoutes />;
      case false:
        return <UserRoutes />;
      default:
        return <OnboardingRoutes />;
    }
  } else {
    switch (state) {
      case 'provider':
        return <ProviderAuthRoutes />;
      case 'user':
        return <UserAuthRoutes />;
      default:
        return <ChooseState />;
    }
  }
};

export default Routes;
