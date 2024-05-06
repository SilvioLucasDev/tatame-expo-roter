import React from 'react';
import { StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import { Text, View } from '@gluestack-ui/themed';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui é a Tela de Login</Text>
      <Link href="/(tabs)/home">Logar</Link>
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
