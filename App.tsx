import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Register from './inscription';
import DrawerStack from './drawer';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogged, setIsLogged] = useState(null); // ⬅️ important

  const checkUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      setIsLogged(!!user);
    } catch (e) {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (isLogged === null) return null; // splash simple

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <Stack.Screen name="DrawerStack">
            {props => <DrawerStack {...props} onLogout={checkUser} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Register">
            {props => <Register {...props} onRegister={checkUser} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
