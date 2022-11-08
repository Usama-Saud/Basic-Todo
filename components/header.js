import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My TODOS</Text>
    </View>
  );
}
//curly braces means we can add different properties or objects

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 10,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#f32',
    fontWeight: 'bold',
  },
});
