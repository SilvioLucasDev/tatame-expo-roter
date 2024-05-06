import React, { useEffect } from 'react';

import { Tabs, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const navigation = useNavigation();

  function generateRandomName() {
    const randomNum = Math.floor(Math.random() * 90000) + 100000;
    const randomName = randomNum.toString(36);
    return 'Academia ' + randomName;
  }

  useEffect(() => {
    const nameAcademy = generateRandomName();
    navigation.setOptions({
      title: nameAcademy,
    });
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="evolution"
        options={{
          headerShown: false,
          title: 'Evolução',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-up-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="debit"
        options={{
          headerShown: false,
          title: 'Débitos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
