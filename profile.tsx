import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
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
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Image
        source={{ uri: user?.photo || 'https://i.pravatar.cc/150' }}
        style={{ width: 120, height: 120, borderRadius: 60 }}
      />
      <Text style={{ marginTop: 15, fontSize: 18 }}>
        {user?.name}
      </Text>
    </View>
  );
}
