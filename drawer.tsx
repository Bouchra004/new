import React, { useEffect, useState } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTabs from './tab';
import Profile from './profile';
import Status from './status';

const Drawer = createDrawerNavigator();

function CustomDrawer({ navigation, onLogout }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('user').then(data => {
      if (data) setUser(JSON.parse(data));
    });
  }, []);

  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{user?.name}</Text>
      </View>

      <DrawerItem label="Accueil" onPress={() => navigation.navigate('Home')} />
      <DrawerItem label="Profil" onPress={() => navigation.navigate('Profile')} />
      <DrawerItem label="Status" onPress={() => navigation.navigate('Status')} />

      <DrawerItem
        label="Déconnexion"
        onPress={() => {
          Alert.alert(
            'Déconnexion',
            'Voulez-vous vraiment vous déconnecter ?',
            [
              { text: 'Annuler', style: 'cancel' },
              {
                text: 'Oui',
                onPress: async () => {
                  await AsyncStorage.removeItem('user');
                  onLogout();
                },
              },
            ]
          );
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerStack({ onLogout }) {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawer {...props} onLogout={onLogout} />
      )}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Status" component={Status} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
