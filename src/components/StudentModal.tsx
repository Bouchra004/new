import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function StudentModal({ visible, student, onClose }) {
  if (!student) return null; // sécurité si student est null

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.label}>Nom : <Text style={styles.value}>{student.nom}</Text></Text>
          <Text style={styles.label}>Prénom : <Text style={styles.value}>{student.prenom}</Text></Text>
          <Text style={styles.label}>Âge : <Text style={styles.value}>{student.age}</Text></Text>
          <Text style={styles.label}>Sexe : <Text style={styles.value}>{student.sexe}</Text></Text>
        
          <Text style={styles.label}>Créé le : <Text style={styles.value}>{student.created_at.toLocaleString()}</Text></Text>

          <View style={{ marginTop: 15 }}>
            <Button title="Fermer" color="#5B3CC4" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088', // fond sombre semi-transparent
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    marginVertical: 4,
    color: '#5B3CC4', // violet foncé
  },
  value: {
    fontWeight: 'normal',
    color: '#333',
  },
});
