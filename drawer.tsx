import React, { useEffect, useState } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTabs from './tab';
import Profile from './profile';
import Status from './status';
import Logout from './deconnexion';

const Drawer = createDrawerNavigator();


function CustomDrawer(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        if (data) setUser(JSON.parse(data));
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{user?.name}</Text>
      </View>

      
      <DrawerItem
        label="Accueil"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Profil"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Status"
        onPress={() => props.navigation.navigate('Status')}
      />
      <DrawerItem
        label="Déconnexion"
        onPress={() => props.navigation.navigate('Logout')}
      />
    </DrawerContentScrollView>
  );
}


export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#1e90ff',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{ title: 'Accueil' }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Status" component={Status} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}



const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
