import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import StarWarsCharacterCard from './StarWarsCharacterCard';

const StarWarsCharacterList = ({ charactersIds }) => {
  // no access to characters there
  const numberOfPeopleWithBrownHair = undefined;

  return (
    <>
      <ScrollView style={styles.container}>
        {charactersIds.map((characterId) => (
          <StarWarsCharacterCard key={characterId} characterId={characterId} />
        ))}
      </ScrollView>
      <Text>{`There is ${numberOfPeopleWithBrownHair} people with brown hair`}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#42c5f5',
  },
});

export default StarWarsCharacterList;
