import { router } from 'expo-router';

export default function IndexScreen() {
  function afterSplash() {
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  }

  afterSplash();
}
