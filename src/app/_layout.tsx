import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import { Stack, useRouter, useSegments } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@/config/gluestack-ui.config';

import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { AcademyContextProvider } from '@/context/AcademyContext';
import { AuthContextProvider, useAuth } from '@/context/AuthContext';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: 'index',
};

const StackLayout = () => {
  const { user, error, loading } = useAuth();
  const segments = useSegments();
  const route = useRouter();

  console.log('user:', user, 'error:', error, 'loading:', loading);

  const inAuthGroup =
    segments.includes('(main)') || segments.includes('(academy)');

  console.log('group:', segments[0], 'inAuthGroup:', inAuthGroup);

  // **LOGADO** E FORA FORA DO APP EU MANDO ELE PARA MAIN/HOME
  // **NÃO LOGADO** E NO APP EU MANDO ELE PARA LOGIN
  // **NÃO LOGADO** E FORA DO APP, ELE ESTÁ LIVRE
  React.useEffect(() => {
    if (user && !inAuthGroup) {
      route.replace('/(main)/home');
    } else if (!user && inAuthGroup) {
      route.replace('/');
    }
  }, [user, segments]);

  // TALVEZ A INDEX VIRAR UM "REALOD" QUE IRÁ SER FINALIZADO QUANDO FOR FEITO O REDIRECT PARA A LOGIN OU HOME
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={{ title: 'Notificações' }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="(academy)" />
    </Stack>
  );
};

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    RobotoMono_Regular: require('@/assets/fonts/RobotoMono.ttf'),
  });

  React.useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <GluestackUIProvider config={config}>
      <StatusBar barStyle="light-content" />
      {fontsLoaded && (
        <AuthContextProvider>
          <AcademyContextProvider>
            <StackLayout />
          </AcademyContextProvider>
        </AuthContextProvider>
      )}
    </GluestackUIProvider>
  );
}
