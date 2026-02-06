import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { User, Trash2, Plus } from "lucide-react-native";

export default function StudentList({ navigation }: any) {
  const [students, setStudents] = useState([
    { id: 1, nom: "Diallo", prenom: "Boukary", age: 22, sexe: "M" },
    { id: 2, nom: "Traoré", prenom: "Awa", age: 20, sexe: "F" },
  ]);

  const deleteStudent = (id: number) => {
    Alert.alert("Suppression", "Supprimer cet étudiant ?", [
      { text: "Annuler" },
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          setStudents(students.filter(s => s.id !== id));
          Alert.alert("Succès", "Étudiant supprimé");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("StudentDetail", {
                student: item,
                setStudents,
                students,
              })
            }
          >
            <User size={40} color="#555" />
            <View style={styles.info}>
              <Text style={styles.name}>
                {item.nom} {item.prenom}
              </Text>
              <Text>{item.age} ans • {item.sexe}</Text>
            </View>

            <TouchableOpacity onPress={() => deleteStudent(item.id)}>
              <Trash2 color="red" size={22} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() =>
          navigation.navigate("AddStudent", { students, setStudents })
        }
      >
        <Plus color="#fff" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 4,
  },
  info: { flex: 1, marginLeft: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  addBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#28a745",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});
