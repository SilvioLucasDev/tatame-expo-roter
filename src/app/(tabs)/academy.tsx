import { StyleSheet } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';
import React from 'react';
import { Link } from 'expo-router';

export default function AcademyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Academy</Text>
      <Link href="/(academy)/home">Ir Para Academia Shark</Link>
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
