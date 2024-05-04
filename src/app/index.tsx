import { StyleSheet } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';
import React from 'react';
import { Link } from 'expo-router';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui é a Tela de Login</Text>
      <Link href={'/(tabs)/home'}>Logar</Link>
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
