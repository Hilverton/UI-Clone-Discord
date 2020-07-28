import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Channel({ name, selected }) {
  return (
    <View style={[styles.channel_info, {backgroundColor: selected ? '#393d42' : 'transparent'}]}>
      <View style={styles.title_channel}>
        <FontAwesome5 name="hashtag" size={18} color="grey" />
        <Text style={styles.name_channel}>{name}</Text>
      </View>
      <View style={styles.icons_channel}>
        <MaterialIcons name="person-add" size={18} color="grey" />
        <MaterialIcons name="settings" size={18} color="grey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  channel_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    paddingLeft: 10,
    paddingRight: 5,
    marginTop: 5,
    borderRadius: 4,
  },
  title_channel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name_channel: {
    marginLeft: 5,
    color: 'grey',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
  },
  icons_channel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
  },
});
