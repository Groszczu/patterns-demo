import React from 'react';
import { Text } from 'react-native';
import { useStarWarsCharacters } from '../hooks/useStarWarsCharacters';
import StarWarsCharacterList from './StarWarsCharacterList';

export default function After() {
  const characters = useStarWarsCharacters(1);

  if (characters === null) {
    return <Text>Loading...</Text>;
  }

  if (characters.error) {
    return <Text>Error occurred...</Text>;
  }

  return <StarWarsCharacterList characters={characters.results} />;
}
