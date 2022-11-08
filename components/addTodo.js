import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

//Value entered by the user will be added in the array of objects

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val); //It will trigger in TextInput
  };
  return (
    <View>
      <TextInput
        style={style.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}
      />

      <Button onPress={() => submitHandler(text)} title="Add Todo"></Button>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    margin: 5,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#dd3',
  },
});
