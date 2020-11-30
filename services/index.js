import SW from './sw';

export { default as UserService } from './user';

export const SWService = new SW('https://swapi.dev/api');
