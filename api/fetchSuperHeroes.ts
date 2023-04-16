import axios from 'axios';

//This function is working for clientside and serverside.
//Just returns the data
export default async function fetchSuperHeroes() {
  const { data } = await axios.get('http://localhost:4000/superHeroes');

  console.log('Data fetched!');
  return data;
}
