import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function EditStudent({ route, navigation }: any) {
  const { student, students, setStudents } = route.params;
  const [nom, setNom] = useState(student.nom);

  const update = () => {
    setStudents(
      students.map((s: any) =>
        s.id === student.id ? { ...s, nom } : s
      )
    );
    Alert.alert("Succès", "Étudiant modifié");
    navigation.goBack();
  };

  return (
    <View>
      <TextInput value={nom} onChangeText={setNom} />
      <Button title="Modifier" onPress={update} />
    </View>
  );
}
