import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '@gluestack-ui/themed';

export default function DebitScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Débitos</Text>
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
