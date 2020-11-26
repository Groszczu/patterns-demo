import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import After from './after/App';
import Before from './before/App';

export default function App() {
  const [before, setBefore] = useState(true);
  const toggleRenderedComponent = () => setBefore(!before);

  return (
    <SafeAreaView style={styles.container}>
      {before ? <Before /> : <After />}
      <TouchableOpacity style={styles.button} onPress={toggleRenderedComponent}>
        <Text style={styles.text}>{before ? 'Before' : 'After'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 80,
    width: '100%',
    backgroundColor: '#3258a8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
