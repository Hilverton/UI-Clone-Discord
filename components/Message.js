import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Avatar from './Avatar';

export default function Message({ text }) {
  function randColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
  } 

  return (
    <View style={styles.message}>
      <View style={styles.avatar_box}>
        <Avatar alertOnline={false} />
      </View>
      <View style={styles.container}>
        <View style={styles.user_info}>
          <Text style={[styles.username, { color: randColor() }]}>Hilverton</Text>
          <Text style={styles.hour}>Today 13:16</Text>
        </View>

        <Text style={styles.message_body}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingRight: 10,
  },
  container: {
    flex: 1,
  },
  avatar_box: {
    width: 57,
    marginTop: 3,
    alignItems: 'center'
  },
  user_info: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  username: {
    fontSize: 15,
    marginRight: 7,
  },
  hour: {
    fontSize: 12,
    color: 'grey',
  },
  message_body: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
  },
});
