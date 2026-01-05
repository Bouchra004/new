import { useEffect } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logout({ navigation, onLogout }) {

  useEffect(() => {
    Alert.alert(
      'Déconnexion',
      'Voulez-vous vraiment vous déconnecter ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
          onPress: () => navigation.goBack(),
        },
        {
          text: 'Oui',
          onPress: async () => {
            await AsyncStorage.removeItem('user');
            onLogout(); 
          },
        },
      ]
    );
  }, []);

  return <View />;
}
