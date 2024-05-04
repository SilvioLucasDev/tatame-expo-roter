import { StyleSheet } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';
import React from 'react';

export default function EvolutionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Evolução</Text>
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
