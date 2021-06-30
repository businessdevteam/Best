import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Smartest shopping list . . . </Text>
      <Text>Notifications . . . </Text>
      <Text>Cost effective . . . </Text>
      <Text>Sharing foods . . . </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
