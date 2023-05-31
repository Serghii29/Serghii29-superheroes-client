import { Superhero } from '../types/superhero';
import { client } from '../utils/fetch';

export const getSuperheroById = async (id = '') =>
  await client.get<Superhero>(`/superheroes/${id}`);

export const getAllHeroes = async () => {
  const response = await client.get<Superhero[]>('/superheroes');

  return response;
};

export const deleteSuperhero = async (id: string) => 
  await client.delete(`/superheroes/${id}`); 
