import { Superhero } from '../types/superhero';
import { client } from '../utils/fetch';

export const getSuperheroById = (id = '') =>
  client.get<Superhero>(`/superheroes/${id}`);
