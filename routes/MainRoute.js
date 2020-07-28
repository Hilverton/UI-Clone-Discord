import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../containers/Home';

const Stack = createStackNavigator();

export default function MainRoute({ navigation }) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}