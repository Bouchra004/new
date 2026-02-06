import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function StudentModal({ visible, student, onClose }) {
  if (!student) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.label}>Nom : <Text style={styles.value}>{student.nom}</Text></Text>
          <Text style={styles.label}>Prénom : <Text style={styles.value}>{student.prenom}</Text></Text>
          <Text style={styles.label}>Âge : <Text style={styles.value}>{student.age}</Text></Text>
          <Text style={styles.label}>Sexe : <Text style={styles.value}>{student.sexe}</Text></Text>
          <Text style={styles.label}>Téléphone : <Text style={styles.value}>{student.telephone}</Text></Text>
          <Text style={styles.label}>Créé le : <Text style={styles.value}>{student.created_at.toLocaleString()}</Text></Text>

          <View style={{ marginTop: 10 }}>
            <Button title="Fermer" color="#7B61FF" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  addButton: { margin: 10 },
  searchInput: { 
    borderWidth: 1, 
    borderColor: '#A084FF', 
    borderRadius: 8, 
    padding: 10, 
    margin: 10, 
    backgroundColor: '#fff' 
  },
});



