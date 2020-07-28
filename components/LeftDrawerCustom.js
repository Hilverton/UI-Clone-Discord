import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Server from './Server';
import Channel from './Channel';
import Avatar from './Avatar';

const statusHeight = StatusBar.currentHeight;

export default function DrawerCustom(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.servers}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scroll}>
            <Server />
            <View style={styles.divider} />
            <Server isNew />
            <Server isNew />
            <Server />
            <Server isNew />
            <Server />
            <Server />
            <Server />
          </ScrollView>
        </View>

        <View style={styles.channels}>
          <View style={styles.channels_header}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Hilverton's server
            </Text>
            <MaterialIcons name="more-vert" size={24} color="white" />
          </View>
          <View style={styles.channels_body}>
            <View style={styles.channels_category}>
              <Text style={styles.category_title}>text channels</Text>
              <MaterialIcons name="add" size={22} color="grey" />
            </View>
            <View style={styles.list_channels}>
              <Channel name="React Js" selected />
              <Channel name="React Native" />
              <Channel name="Node Js" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.userInfo}>
          <View style={{ width: 75, alignItems: 'center' }}>
            <Avatar alertOnline={true} isOnline />
          </View>
          <View>
            <Text style={{ color: 'white' }}>Hilverton</Text>
            <Text style={{ color: 'grey', fontSize: 13 }}>#0372</Text>
          </View>
        </View>
        <View style={styles.footer_icons}>
          <MaterialIcons name="mic" size={24} color="grey" />
          <MaterialIcons name="headset" size={20} color="grey" />
          <MaterialIcons name="settings" size={20} color="grey" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  servers: {
    padding: 0,
    width: 75,
    backgroundColor: '#202225',
    paddingTop: statusHeight,
  },
  scroll: {
    alignItems: 'center',
    width: 75,
    padding: 0,
  },
  divider: {
    height: 3,
    width: '60%',
    backgroundColor: '#292b2f',
  },
  channels: {
    flex: 1,
    width: 150,
    paddingTop: statusHeight,
    backgroundColor: '#292b2f',
  },
  channels_header: {
    paddingHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  channels_body: {
    flex: 1,
    padding: 10,
    backgroundColor: '#2f3136',
  },
  channels_category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category_title: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'grey',
    fontWeight: 'bold',
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#292b2f',
    paddingRight: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer_icons: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
