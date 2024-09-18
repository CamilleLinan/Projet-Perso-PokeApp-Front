import { FC } from 'react';
import useFetchFirstGen from '../hooks/fetchFirstGen.hook';

const Home: FC = () => {
    const { pokemonsData } = useFetchFirstGen();
    console.log(pokemonsData);

  return (
    <p>
      Home
    </p>
  );
};

export default Home;