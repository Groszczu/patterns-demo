import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ScreenLayout from './ScreenLayout';

export default function Before() {
  const [isHomeScreen, setIsHomeScreen] = useState(true);

  const toggleScreen = () => setIsHomeScreen(!isHomeScreen);

  return (
    <>
      {isHomeScreen ? <HomeScreen /> : <DetailsScreen />}
      <TouchableOpacity style={styles.switchButton} onPress={toggleScreen} />
    </>
  );
}

function HomeScreen() {
  return (
    <ScreenLayout headerTitle={'Home'}>
      <Text>Home Screen</Text>
    </ScreenLayout>
  );
}

function DetailsScreen() {
  return (
    <ScreenLayout headerTitle={'Details'}>
      <Text>Details Screen</Text>
      <View style={styles.circle} />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'red',
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },

  switchButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
  },
});
