import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

//export default function TodoItem(props){
//     props.item we can access like this as well
// }
//destructuring props

export default function TodoItem({item, pressHandler}) {
  return (
    //firing the anonyms function and passing the key.item, we have already
    //   access to the key from props/destructuring //item key will be pressed and
    //   we will receive that action in the pressHandler function in App.js
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      {/* //style={styles.itemD} */}
      <View style={styles.item}>
        <AntDesign name="delete" color="red" size={25} />

        <Text style={{fontSize: 25, marginLeft: 10}}>{item.text}</Text>
        {/* <AntDesign
          style={{marginLeft: 50}}
          name="delete"
          color="red"
          size={25}
        /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginTop: 12,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 8,
    fontSize: 30,
    borderWidth: 2,
    flexDirection: 'row',
  },
});
