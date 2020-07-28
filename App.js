import React from 'react';
import { StatusBar } from 'react-native';
import Route from './routes/Routes';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Route />
    </>
  );
}
