import PrimeScreen from '../components/primescreen';
import AboutScreen from '../components/aboutscreen';
import ShowScreen from '../components/showscreen';
import FadeElement from '../components/layouts/fadeelemnts';
import { Divider } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <FadeElement>
        <PrimeScreen />
      </FadeElement>

      <Divider my={10} />

      <FadeElement>
        <AboutScreen />
      </FadeElement>

      <Divider my={10} />

      <FadeElement>
        <ShowScreen />
      </FadeElement>
    </>
  );
};

export default Home;
