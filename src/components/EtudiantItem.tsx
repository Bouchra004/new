import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EtudiantItem = ({ etudiant, onEdit, onDelete, onDetail }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{etudiant.nom} {etudiant.prenom}</Text>
      <View style={styles.buttons}>
        <Button title="Détail" onPress={() => onDetail(etudiant)} />
        <Button title="Modifier" onPress={() => onEdit(etudiant)} />
        <Button title="Supprimer" onPress={() => onDelete(etudiant.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1 },
  text: { fontSize: 16 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }
});

export default EtudiantItem;
