import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../containers/Home';

import RightDrawer from './RightDrawer';

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="RightDrawer" component={RightDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}