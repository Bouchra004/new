import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ onRegister }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const saveUser = async () => {
    if (!name || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    try {
      const user = { name, password };

      
      await AsyncStorage.setItem('user', JSON.stringify(user));

      
      const existing = await AsyncStorage.getItem('persons');
      if (!existing) {
        await AsyncStorage.setItem('persons', JSON.stringify([]));
      }

      
      onRegister();

    } catch (error) {
      console.log(error);
      Alert.alert('Erreur', 'Inscription échouée');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="Se connecter" onPress={saveUser} />
    </View>
  );
}
