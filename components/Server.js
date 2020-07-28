import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Server({ isNew }) {
  return (
    <View style={styles.container} >
      <View style={styles.box} />
      {isNew && <View style={styles.isnew} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    marginVertical: 7,
    zIndex: 100,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#36393f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isnew: {
    top: '45%',
    left: -15,
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'white',
    position: 'absolute'
  },
});
