import React from 'react';
import StarWarsCharacterList from './StarWarsCharacterList';

export default function Before() {
  return (
    <StarWarsCharacterList
      charactersIds={[...Array.from({ length: 10 }, (_, i) => i + 1)]}
    />
  );
}
