import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import StarWarsCharacterCard from './StarWarsCharacterCard';

const StarWarsCharacterList = ({ characters }) => {
  const numberOfPeopleWithBrownHair = characters.filter(
    (character) => character.hair_color === 'brown'
  ).length;

  return (
    <>
      <ScrollView style={styles.container}>
        {characters.map((character, i) => (
          <StarWarsCharacterCard key={i} character={character} />
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
