import React, { useState, useRef } from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Message from '../components/Message';
import Input from '../components/Input';

const messagesText = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    text:
      'Proin sit amet tellus viverra purus volutpat gravida nec nec ipsum. Curabitur hendrerit ligula tortor, non vestibulum nunc hendrerit sed. Morbi eget vestibulum ante. Mauris maximus convallis ex, vitae egestas ligula scelerisque in. Aliquam erat volutpat. In et ultrices sapien, non interdum orci. Nulla blandit luctus risus in posuere. Praesent magna augue, sodales eget bibendum nec, condimentum ut elit. Maecenas et odio ac leo ullamcorper malesuada.',
  },
  {
    id: 3,
    text:
      'liquam tincidunt purus eu aliquet tempus. Aliquam sit amet aliquet felis, ut dapibus ipsum. In hac habitasse platea dictumst. Suspendisse ac quam dictum diam pretium tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    id: 4,
    text:
      'Integer bibendum porttitor auctor. Nullam nec lacus ut elit feugiat rutrum a et dui.',
  },
  {
    id: 5,
    text:
      'Donec a consequat dui, eu euismod massa. Phasellus commodo accumsan nulla, ac bibendum arcu sollicitudin congue.',
  },
  {
    id: 6,
    text: 'Cras non odio sed nulla dapibus sodales.',
  },
  {
    id: 7,
    text: 'Vestibulum in sollicitudin velit. Cras vitae nulla nibh.',
  },
  {
    id: 8,
    text:
      'Etiam pellentesque porttitor ultricies. Donec molestie lectus nulla, eget suscipit massa placerat quis. Morbi mollis, massa sit amet molestie ultrices, velit metus laoreet mauris, vitae ultricies felis orci vel massa. Vestibulum aliquam sagittis molestie. Phasellus in mi non sem bibendum tincidunt vel et purus. In hac habitasse platea dictumst. Maecenas ornare justo orci, vel tristique diam porttitor eget. Vivamus quis velit ac risus molestie gravida a et sapien. Vestibulum in sollicitudin velit. Cras vitae nulla nibh.',
  },
  {
    id: 9,
    text:
      'Proin gravida, arcu vitae malesuada viverra, lacus augue pulvinar diam, sed finibus massa eros at lorem. Ut tristique faucibus varius.',
  },
  {
    id: 10,
    text:
      'Integer bibendum porttitor auctor. Nullam nec lacus ut elit feugiat rutrum a et dui. Donec a consequat dui, eu euismod massa. Phasellus commodo accumsan nulla, ac bibendum arcu sollicitudin congue. Aenean in ipsum congue, consequat urna at, efficitur orci. Proin maximus tortor ut lectus maximus, id sagittis mi bibendum.',
  },
];

const statusHeight = StatusBar.currentHeight;

export default function Home({ navigation }) {
  const [chat, setChat] = useState(messagesText);
  const [length, setLength] = useState(messagesText.length);
  const flatListRef = useRef(null);

  function addNewMessage(input) {
    console.log('antes',chat.length);
    let newMess = chat;
    const newMessage = {
      id: chat.length + 1,
      text: input,
    };

    newMess.push(newMessage);

    setChat(newMess);
    console.log('depois',chat.length);
    setLength(chat.length);
  }

  const renderItem = ({ item }) => <Message text={item.text} />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title_header}>
          <TouchableHighlight
            underlayColor="grey"
            style={styles.button_menu}
            onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={26} color="white" />
          </TouchableHighlight>
          <FontAwesome5 name="hashtag" size={22} color="grey" />
          <Text style={styles.title_name}>REACT JS</Text>
        </View>
        <View style={styles.icons_header}>
          <MaterialIcons name="search" size={26} color="white" />
          <MaterialIcons name="group" size={26} color="white" />
          <MaterialIcons name="more-vert" size={26} color="white" />
        </View>
      </View>

      <View style={styles.messages}>
        <FlatList
          ref={flatListRef}
          data={chat}
          extraData={length}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onContentSizeChange={() => flatListRef.current.scrollToEnd()}
        />
      </View>

      <Input addNewMessage={addNewMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#30343c',
    paddingTop: statusHeight,
  },
  header: {
    paddingRight: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    backgroundColor: '#30343c',
  },
  title_header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button_menu: {
    backgroundColor: '#30343c',
    marginHorizontal: 9,
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginLeft: 7,
  },
  icons_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 110,
  },
  messages: {
    flex: 1,
    backgroundColor: '#36393f',
  },
});
