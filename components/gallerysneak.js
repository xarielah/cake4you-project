import GalSection from './layouts/galsection';
import WorkPic1 from '../public/work/orpaz.jpg';
import WorkPic2 from '../public/work/zer.jpg';
import WorkPic3 from '../public/work/bday.jpg';

const GallerySnick = () => {
  const picArray = [WorkPic1, WorkPic2, WorkPic3];
  console.log(picArray);
  return <GalSection picArr={picArray} />;
};
export default GallerySnick;
