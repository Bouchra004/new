import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddPerson({ navigation }) {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    age: '',
    filiere: '',
    sexe: '',
  });

  useEffect(() => {
    AsyncStorage.getItem('user').then(data => {
      if (data) setUser(JSON.parse(data));
    });
  }, []);

  const savePerson = async () => {
    if (!user) {
      Alert.alert('Erreur', 'Utilisateur non chargé');
      return;
    }

    if (
      !form.nom ||
      !form.prenom ||
      !form.age ||
      !form.filiere ||
      !form.sexe
    ) {
      Alert.alert('Erreur', 'Tous les champs sont obligatoires');
      return;
    }

    try {
      const key = `persons_${user.name}`;
      const stored = await AsyncStorage.getItem(key);
      const persons = stored ? JSON.parse(stored) : [];

      persons.push(form);
      await AsyncStorage.setItem(key, JSON.stringify(persons));

      navigation.goBack();
    } catch (e) {
      Alert.alert('Erreur', 'Enregistrement échoué');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nom"
        value={form.nom}
        onChangeText={v => setForm({ ...form, nom: v })}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Prénom"
        value={form.prenom}
        onChangeText={v => setForm({ ...form, prenom: v })}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Âge"
        keyboardType="numeric"
        value={form.age}
        onChangeText={v => setForm({ ...form, age: v })}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Filière"
        value={form.filiere}
        onChangeText={v => setForm({ ...form, filiere: v })}
        style={{ borderWidth: 1, marginBottom: 15 }}
      />

      
      <Text style={{ marginBottom: 5 }}>Sexe :</Text>

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => setForm({ ...form, sexe: 'Homme' })}
          style={{
            flex: 1,
            padding: 10,
            marginRight: 5,
            backgroundColor: form.sexe === 'Homme' ? '#4CAF50' : '#ccc',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Homme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setForm({ ...form, sexe: 'Femme' })}
          style={{
            flex: 1,
            padding: 10,
            marginLeft: 5,
            backgroundColor: form.sexe === 'Femme' ? '#4CAF50' : '#ccc',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Femme</Text>
        </TouchableOpacity>
      </View>

      <Button title="Enregistrer" onPress={savePerson} />
    </View>
  );
}
