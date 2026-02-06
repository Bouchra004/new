import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ListScreen from '../screens/ListScreen';
import StatsScreen from '../screens/StatsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7B61FF', // violet
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff' }, 
      }}
    >
      <Tab.Screen
        name="Liste"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="list" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Statistique"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="stats-chart" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
