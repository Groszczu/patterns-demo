import React from 'react';
import { StyleSheet, View } from 'react-native';
import StarWarsCharacterCard from './StarWarsCharacterCard';

export default function Before() {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map((id) => (
        <StarWarsCharacterCard key={id} characterId={id} />
      ))}
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
});
