import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { useStarWarsCharacters } from '../hooks/useStarWarsCharacters';
import StarWarsCharacterCard from './StarWarsCharacterCard';

export default function After() {
  const characters = useStarWarsCharacters(1);

  if (characters === null) {
    return <Text>Loading...</Text>;
  }

  if (characters.error) {
    return <Text>Error occurred...</Text>;
  }

  const { results } = characters;
  const numberOfPeopleWithBrownHair = results.filter(
    (character) => character.hair_color === 'brown'
  ).length;

  return (
    <>
      <ScrollView style={styles.container}>
        {characters.results.map((character, i) => (
          <StarWarsCharacterCard key={i} character={character} />
        ))}
      </ScrollView>
      <Text>{`There is ${numberOfPeopleWithBrownHair} people with brown hair`}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#42c5f5',
  },
});
