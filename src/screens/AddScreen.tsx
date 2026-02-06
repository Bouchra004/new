import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function AddStudent({ route, navigation }: any) {
  const { students, setStudents } = route.params;

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const save = () => {
    setStudents([
      ...students,
      {
        id: Date.now(),
        nom,
        prenom,
        age: 18,
        sexe: "M",
      },
    ]);
    Alert.alert("Succès", "Étudiant ajouté");
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Nom" onChangeText={setNom} />
      <TextInput placeholder="Prénom" onChangeText={setPrenom} />
      <Button title="Enregistrer" onPress={save} />
    </View>
  );
}
