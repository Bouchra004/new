import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Maison';
import Status from './status';
import AddPerson from './add';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: 'Home' }}
      />

      <Tab.Screen
        name="Add"
        component={AddPerson}
        options={{ title: '+' }}
      />

      <Tab.Screen
        name="Status"
        component={Status}
      />
    </Tab.Navigator>
  );
}
