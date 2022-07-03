import AboutScreen from '../components/aboutscreen';
import ShowScreen from '../components/showscreen';
import FadeElement from '../components/layouts/fadeelemnts';
import GalSection from '../components/layouts/galsection';

const Home = () => {
  return <>
    <FadeElement index={1}>
      <AboutScreen />
    </FadeElement>
    <FadeElement index={2}>
      <AboutScreen />
    </FadeElement>
  </>
};

export default Home;
