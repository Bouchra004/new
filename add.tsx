import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddPerson({ navigation }) {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    age: '',
    filiere: '',
    genre: '',
  });

  const savePerson = async () => {
    try {
      const stored = await AsyncStorage.getItem('persons');
      const persons = stored ? JSON.parse(stored) : [];

      persons.push(form);
      await AsyncStorage.setItem('persons', JSON.stringify(persons));

      navigation.navigate('MyHome');
    } catch (error) {
      Alert.alert('Erreur', 'Enregistrement échoué');
    }
  };

  return (
    <View>
      {Object.keys(form).map(key => (
        <TextInput
          key={key}
          placeholder={key}
          onChangeText={v => setForm({ ...form, [key]: v })}
        />
      ))}
      <Button title="Enregistrer" onPress={savePerson} />
    </View>
  );
}
