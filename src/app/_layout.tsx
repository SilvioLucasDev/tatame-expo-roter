import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@/config/gluestack-ui.config';

import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    RobotoMono_Regular: require('@/assets/fonts/RobotoMono.ttf'),
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <GluestackUIProvider config={config}>
      <StatusBar barStyle="light-content" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(academy)" />
      </Stack>
    </GluestackUIProvider>
  );
}
