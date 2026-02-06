import React, { useEffect, useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import axios from 'axios';
import EtudiantItem from '../components/EtudiantItem';
import { Etudiant } from './types'


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([]);

  const fetchEtudiants = async () => {
    try {
      const res = await axios.get<Etudiant[]>('http://10.0.2.2:3000/etudiant'); // Remplacer localhost par IP locale
      setEtudiants(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEtudiants();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://10.0.2.2:3000/etudiant/${id}`);
      fetchEtudiants();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Button title="Ajouter un étudiant" onPress={() => navigation.navigate('Add')} />
      <FlatList
        data={etudiants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EtudiantItem
            etudiant={item}
            onEdit={(et) => navigation.navigate('Edit', { etudiant: et })}
            onDelete={handleDelete}
            onDetail={(et) => navigation.navigate('Detail', { etudiant: et })}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
