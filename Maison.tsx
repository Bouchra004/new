import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';

import Home from './toit';
import AddPerson from './add';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Accueil',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddPerson')}
              style={{ marginRight: 15 }}
            >
              <Text style={{ fontSize: 26, color: '#1e90ff' }}>＋</Text>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="AddPerson"
        component={AddPerson}
        options={{ title: 'Ajouter une personne' }}
      />
    </Stack.Navigator>
  );
}
