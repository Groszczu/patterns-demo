import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoRow from '../common/InfoRow';
import { useStarWarsCharacter } from '../hooks/useStarWarsCharacter';

const StarWarsCharacterCard = ({ characterId }) => {
  const character = useStarWarsCharacter(characterId);

  if (character === null) {
    return <Text>Loading...</Text>;
  }

  if (character.error) {
    return <Text>Error occurred</Text>;
  }

  const { name, gender, birth_year, hair_color } = character;

  return (
    <View style={styles.container}>
      <InfoRow name={'name'} value={name} />
      <InfoRow name={'hair color'} value={hair_color} />
      <InfoRow name={'gender'} value={gender} />
      <InfoRow name={'birth year'} value={birth_year} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    width: '100%',
  },
});

export default StarWarsCharacterCard;
