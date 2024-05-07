import React from 'react';
import { StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import { Box, Text, View } from '@gluestack-ui/themed';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Registro</Text>

      <Box p="$5">
        <Link href="/(main)/home">Registrar-se</Link>
      </Box>

      <Box p="$5">
        <Link href="/">Voltar para o Login</Link>
      </Box>
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
