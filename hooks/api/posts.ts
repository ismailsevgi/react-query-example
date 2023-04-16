import { useQuery } from 'react-query';
import fetchSuperHeroes from '../../api/fetchSuperHeroes';
import { SuperHero } from '@/src/interfaces/interfaces';

//Returns a function to use on Client Side
//This function is nothing to do with serverside.
//const { data, isLoading } = usePosts();

export const usePosts = () => {
  return useQuery<SuperHero[], any>('super-heroes', () => fetchSuperHeroes());
};
