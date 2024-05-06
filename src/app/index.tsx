import { StyleSheet } from 'react-native';

import { router } from 'expo-router';

export default function IndexScreen() {
  function afterSplash() {
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  }

  afterSplash();
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
