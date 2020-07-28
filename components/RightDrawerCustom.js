import React from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Avatar from './Avatar';
const statusHeight = StatusBar.currentHeight;

const sectionListData = [
  {
    id: 1,
    topic: 'Moderators',
    data: [
      {
        id: 1,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 2,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 3,
        name: 'Any name',
        isOnline: false,
      },
    ],
  },
  {
    id: 2,
    topic: 'Leaders',
    data: [
      {
        id: 1,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 2,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 3,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 4,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 5,
        name: 'Any name',
        isOnline: true,
      },
    ],
  },
  {
    id: 3,
    topic: 'Available',
    data: [
      {
        id: 1,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 2,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 3,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 4,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 5,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 6,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 7,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 8,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 9,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 10,
        name: 'Any name',
        isOnline: true,
      },
      {
        id: 11,
        name: 'Any name',
        isOnline: false,
      },
      {
        id: 12,
        name: 'Any name',
        isOnline: true,
      },
    ],
  },
];

export default function RightDrawerCustom() {
  return (
    <View style={styles.container}>
      <View style={styles.topic}>
        <Text style={styles.channel_topic}>Channel topic</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          convallis consectetur tellus, tellus sodales vitae.
        </Text>
        <Text style={styles.paragraph}>
          Donec sit amet purus in ante pellentesque auctor sit amet a nisl.
          Nullam sit amet elementum sapien.
        </Text>
      </View>

      <SectionList
        style={styles.container_topics}
        sections={sectionListData}
        renderItem={({ item, index }) => {
          return (
            <View key={item.id} style={styles.container_item}>
              <View style={styles.box_avatar}>
                <Avatar alertOnline={true} isOnline={item.isOnline} />
              </View>
              <Text style={{ color: 'white' }}>{item.name}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.topic_name}>
              <Text style={{ color: 'grey', fontSize: 15 }}>
                {section.topic}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3136',
    paddingTop: statusHeight,
  },
  topic: {
    backgroundColor: '#202225',
    paddingTop: 10,
  },
  channel_topic: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginHorizontal: 10
  },
  paragraph: {
    fontSize: 11,
    color: 'grey',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  container_topics: {
    paddingHorizontal: 10,
  },
  topic_name: {
    height: 50,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 5,
    backgroundColor: '#2f3136',
  },
  container_item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
  },
  box_avatar: {
    width: 50,
  },
});
