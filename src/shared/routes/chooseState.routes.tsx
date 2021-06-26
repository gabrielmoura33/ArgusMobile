import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';

import theme from '../../global/styles/theme';
import ChooseState from '../screens/ChooseState';
import SocialLogin from '../screens/SocialLogin';

const ChooseStateStack = createStackNavigator();

const forFade = ({ current }: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const ChooseStateRoutes: React.FC = () => (
  <ChooseStateStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.Secondary },
      cardStyleInterpolator: forFade,
    }}
    initialRouteName="ChooseState"
  >
    <ChooseStateStack.Screen name="ChooseState" component={ChooseState} />
    <ChooseStateStack.Screen name="SocialLogin" component={SocialLogin} />
  </ChooseStateStack.Navigator>
);

export default ChooseStateRoutes;
