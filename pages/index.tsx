import {Box} from '@components/Box';
import {Hero} from '@components/Hero';
import {Products} from '@components/Prodocts';
import {Services} from '@components/Services';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Box css={{mt: '100px', marginX: 'auto', width: 'min(1000px,100%)'}}>
        <Services />
        <Products />
      </Box>
    </div>
  );
};

export default Home;
