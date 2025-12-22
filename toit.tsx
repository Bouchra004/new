import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [user, setUser] = useState(null);
  const [persons, setPersons] = useState([]);

  const fetchUser = async () => {
    try {
      const data = await AsyncStorage.getItem('user');
      if (data) setUser(JSON.parse(data));
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de charger utilisateur');
    }
  };

  const fetchPersons = async () => {
    try {
      const data = await AsyncStorage.getItem('persons');
      if (data) setPersons(JSON.parse(data));
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de charger la liste');
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPersons();
  }, []);

  return (
    <View>
      <Text>Welcome {user?.name}</Text>

      <FlatList
        data={persons}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.nom} {item.prenom} - {item.age}</Text>
        )}
      />
    </View>
  );
}
