import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@/config/gluestack-ui.config';

import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Layout() {
  const [fontsLoaded, fontsError] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    RobotoMono_Regular: require('@/assets/fonts/RobotoMono.ttf'),
  });

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <GluestackUIProvider config={config}>
      <StatusBar barStyle="light-content" />
      {fontsLoaded && (
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen
            name="notification"
            options={{ title: 'Notificações' }}
          />
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen name="(academy)" />
        </Stack>
      )}
    </GluestackUIProvider>
  );
}
