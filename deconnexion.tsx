import React from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logout({ navigation }) {

  const logout = async () => {
    Alert.alert(
      'Déconnexion',
      'Voulez-vous vraiment vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Oui',
          onPress: async () => {
            await AsyncStorage.removeItem('user');
            navigation.replace('Register'); 
          },
        },
      ]
    );
  };

  return <View>{logout()}</View>;
}
