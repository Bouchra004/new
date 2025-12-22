import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './toit';
import AddPerson from './add';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddPerson" component={AddPerson} />
    </Stack.Navigator>
  );
}

