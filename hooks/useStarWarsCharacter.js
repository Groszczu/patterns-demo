import { useEffect, useState } from 'react';
import { SWService } from '../services';

export const useStarWarsCharacter = (characterId) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await SWService.getPerson(characterId);
      setCharacter(result);
    })();
  }, [characterId]);

  return character;
};
