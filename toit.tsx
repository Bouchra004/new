import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ route, navigation }) {
  const [user, setUser] = useState(null);
  const [persons, setPersons] = useState([]);

  // Fonction pour charger les données
  const loadData = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (!userData) return;

    const u = JSON.parse(userData);
    setUser(u);

    const key = `persons_${u.name}`;
    const data = await AsyncStorage.getItem(key);
    setPersons(data ? JSON.parse(data) : []);
  };

  
  useEffect(() => {
    loadData();
  }, []);

 
  useEffect(() => {
    if (route?.params?.refresh) {
      loadData();
     
      navigation.setParams({ refresh: false });
    }
  }, [route?.params?.refresh]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Bienvenue {user?.name}
      </Text>

      {persons.length === 0 ? (
        <Text>Aucune personne enregistrée.</Text>
      ) : (
        <FlatList
          data={persons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={{ marginBottom: 5 }}>
              {item.nom} {item.prenom} - {item.age} ans | {item.filiere} | {item.sexe}
            </Text>
          )}
        />
      )}
    </View>
  );
}
