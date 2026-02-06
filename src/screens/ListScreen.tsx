import React, { useState, useContext } from 'react';
import { View, TextInput, FlatList, Button, StyleSheet } from 'react-native';
import { StudentContext } from '../context/StudentContext';
import StudentItem from '../components/StudentItem';
import StudentFormModal from '../components/StudentFormModal';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ListScreen() {
  const { students } = useContext(StudentContext);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filtered = students.filter(s =>
    `${s.nom} ${s.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Liste des étudiants" />

      {/* Barre de recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Rechercher par nom ou prénom"
        value={search}
        onChangeText={setSearch}
      />

      {/* Liste des étudiants */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <StudentItem student={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Bouton Ajouter */}
      <View style={styles.addButton}>
        <Button
          title="➕ Ajouter un étudiant"
          color="#A084FF" // violet pastel
          onPress={() => setShowForm(true)}
        />
      </View>

      {/* Modal Ajouter */}
      <StudentFormModal visible={showForm} onClose={() => setShowForm(false)} />

      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  searchInput: {
    borderWidth: 1,
    borderColor: '#A084FF',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  addButton: { margin: 10 },
});
