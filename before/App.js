import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Toolbar from '../common/Toolbar';

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
    <View style={styles.container}>
      <Toolbar title={'Home'} />
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Toolbar title={'Details'} />
      <Text>Details Screen</Text>
      <View style={styles.circle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#42c5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },

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
