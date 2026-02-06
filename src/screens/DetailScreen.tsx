import React from "react";
import { View, Text, Button } from "react-native";

export default function StudentDetail({ route, navigation }: any) {
  const { student, students, setStudents } = route.params;

  return (
    <View>
      <Text>Nom : {student.nom}</Text>
      <Text>Prénom : {student.prenom}</Text>
      <Text>Âge : {student.age}</Text>
      <Text>Sexe : {student.sexe}</Text>

      <Button
        title="Modifier"
        onPress={() =>
          navigation.navigate("EditStudent", {
            student,
            students,
            setStudents,
          })
        }
      />
    </View>
  );
}
