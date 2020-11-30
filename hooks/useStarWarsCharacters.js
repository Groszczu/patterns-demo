import { useEffect, useState } from 'react';
import { SWService } from '../services';

export const useStarWarsCharacters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await SWService.getPeople();
      setCharacters(result);
    })();
  }, []);

  return characters;
};
