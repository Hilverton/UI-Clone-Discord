import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import LeftDrawerCustom from '../components/LeftDrawerCustom';
import MainRoute from './MainRoute';

const Drawer = createDrawerNavigator();

export default function LeftDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: 300,
      }}
      // openByDefault
      drawerContent={(props) => <LeftDrawerCustom {...props} />}>
      <Drawer.Screen name="MainRoute" component={MainRoute} />
    </Drawer.Navigator>
  );
}
