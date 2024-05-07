import React from 'react';
import { Pressable } from 'react-native';

import { Link, Tabs } from 'expo-router';
import { Foundation, Ionicons } from '@expo/vector-icons';

export default function MainTabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="academy"
        options={{
          title: 'Academias',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/notification" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="notifications"
                    size={25}
                    style={{
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
