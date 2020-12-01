import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Container from '../common/Container';
import Toolbar from '../common/Toolbar';

export default function Before() {
  const [isHomeScreen, setIsHomeScreen] = useState(true);

  const toggleScreen = () => setIsHomeScreen(!isHomeScreen);

  return (
    <>
      {isHomeScreen ? <HomeScreen /> : <DetailsScreen />}
      <TouchableOpacity style={styles.switchButton} onPress={toggleScreen}>
        <Text>Change screen</Text>
      </TouchableOpacity>
    </>
  );
}

function HomeScreen() {
  const [toolbarPressCounter, setToolbarPressCounter] = useState(0);
  const onToolbarPress = () => setToolbarPressCounter(toolbarPressCounter + 1);

  const pressesArray = Array.from(
    { length: Math.min(toolbarPressCounter, 15) },
    () => null
  );

  return (
    <Container>
      <Toolbar title={'Home'} onPress={onToolbarPress} />
      <Text>Home Screen</Text>
      {pressesArray.map((_, i) => (
        <Text key={i}>Toolbar pressed</Text>
      ))}
    </Container>
  );
}

function DetailsScreen() {
  const [toolbarPressCounter, setToolbarPressCounter] = useState(0);
  const onToolbarPress = () => setToolbarPressCounter(toolbarPressCounter + 1);

  return (
    <Container>
      <Toolbar title={'Details'} onPress={onToolbarPress} />
      <Text>Details Screen</Text>
      <View style={styles.circle} />
      <Text>Toolbar pressed {toolbarPressCounter} on Details screen</Text>
    </Container>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
