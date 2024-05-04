import { StyleSheet, View } from 'react-native';
// import { Text } from 'react-native';
import { Text } from '@gluestack-ui/themed';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
