import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Input({ addNewMessage }) {
  const [input, setInput] = useState('');

  function submit() {
    if (!input) return;
    setInput('');
    addNewMessage(input);
  }

  return (
    <View style={styles.input_field}>
        <MaterialIcons name="add" size={22} color="grey" />
        <TextInput
          style={styles.input}
          multiline
          placeholder="Conversar em #REACT JS"
          placeholderTextColor="grey"
          value={input}
          onChangeText={text => setInput(text)}
        />
        <View style={styles.icons}>
          <TouchableOpacity>
            <MaterialIcons name="insert-emoticon" size={22} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity onPress={submit}>
            <MaterialIcons name="send" size={22} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  input_field: {
    height: 45,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    backgroundColor: '#36393f',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 5,
    paddingTop: 5,
    color: 'grey',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
});
