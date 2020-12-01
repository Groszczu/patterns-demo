import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ScreenLayout from './ScreenLayout';

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
  const renderHomeScreenContent = (pressCount) => {
    const pressesArray = Array.from(
      { length: Math.min(pressCount, 15) },
      () => null
    );

    return (
      <>
        <Text>Home Screen</Text>
        {pressesArray.map((_, i) => (
          <Text key={i}>Toolbar pressed</Text>
        ))}
      </>
    );
  };

  return (
    <ScreenLayout headerTitle={'Home'}>{renderHomeScreenContent}</ScreenLayout>
  );
}

function DetailsScreen() {
  return (
    <ScreenLayout headerTitle={'Details'}>
      {(pressCount) => (
        <>
          <Text>Details Screen</Text>
          <View style={styles.circle} />
          <Text>Toolbar pressed {pressCount} on Details screen</Text>
        </>
      )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
