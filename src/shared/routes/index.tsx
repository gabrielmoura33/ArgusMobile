import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import theme from '../../global/styles/theme';
import { ProviderAuthRoutes } from '../../modules/Providers/routes/providers_auth.routes';
import UserBottomTabNavigator from '../../modules/User/routes/navigation/user_tabnavigator';
import { UserAuthRoutes } from '../../modules/User/routes/user_auth.routes';
import { useAccess } from '../hooks/access';
import { useAuth } from '../hooks/auth';
import NoConnection from '../screens/NoConnection';
import ChooseStateRoutes from './chooseState.routes';

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

  if (netInfo.isConnected === false) return <NoConnection />;

  if (isFirstLaunch !== false) {
    // console.log(user);
    // console.log(isFirstLaunch);
    // console.log(state);
    return <UserAuthRoutes />;
  }

  if (user && user.signed) {
    return <UserBottomTabNavigator />;
  }

  switch (state) {
    case 'provider':
      return <ProviderAuthRoutes />;
    case 'user':
      return <UserAuthRoutes />;
    default:
      return <ChooseStateRoutes />;
  }
};

export default Routes;
