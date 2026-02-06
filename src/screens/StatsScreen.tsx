import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StudentContext } from '../context/StudentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StatsScreen() {
  const { students } = useContext(StudentContext);

  const total = students.length;
  const boys = students.filter(s => s.sexe === 'M').length;
  const girls = students.filter(s => s.sexe === 'F').length;

  return (
    <View style={styles.container}>
      <Header title="Statistiques" />

      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Total étudiants : {total}</Text>
        <Text style={styles.statText}>Garçons : {boys}</Text>
        <Text style={styles.statText}>Filles : {girls}</Text>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  statsContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  statText: { fontSize: 18, marginVertical: 8, color: '#5B3CC4', fontWeight: 'bold' },
});
