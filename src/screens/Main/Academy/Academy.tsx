import React from 'react';
import { StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import { Text, View } from '@gluestack-ui/themed';

export default function AcademyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Academy</Text>
      <Link href="/(academy)/home">Ir para a academia Shark</Link>
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
