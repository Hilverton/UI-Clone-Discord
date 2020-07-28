import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator  } from '@react-navigation/drawer'; 

import LeftDrawer from './LeftDrawer';
import RightDrawerCustom from '../components/RightDrawerCustom';

const Drawer = createDrawerNavigator();

export default function RightDrawer() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={props => <RightDrawerCustom /> }
    >
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  )
}