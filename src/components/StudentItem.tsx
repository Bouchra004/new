import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StudentContext } from '../context/StudentContext';
import StudentFormModal from './StudentFormModal';
import StudentModal from './StudentModal';


export default function StudentItem({ student }) {
  const { deleteStudent } = useContext(StudentContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => setShowDetails(true)}>
          <Text style={styles.name}>👤 {student.nom} {student.prenom}</Text>
        </TouchableOpacity>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => setShowEdit(true)} style={{ marginRight: 15 }}>
            <Icon name="create-outline" size={22} color="#7B61FF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteStudent(student.id)}>
            <Icon name="trash-outline" size={22} color="red" />
          </TouchableOpacity>
        </View>
      </View>

      <StudentModal visible={showDetails} student={student} onClose={() => setShowDetails(false)} />
      <StudentFormModal visible={showEdit} student={student} onClose={() => setShowEdit(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A084FF', 
  },
  name: { fontSize: 16, fontWeight: '500', color: '#333' },
});

