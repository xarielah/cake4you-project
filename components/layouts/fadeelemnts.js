import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const FadeElement = ({ children, index = 0 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView, ref)
    if (inView) {
      control.start('active');
    } else {
      control.start('hidden')
    }
  }, [control, inView]);

  const variants = {
    start: { opacity: 0, scale: 0.8 },
    active: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.15 * index } },
  };

  return (
    <motion.section ref={ref} variants={variants} initial={'start'} animate={'active'}>
      {children}
    </motion.section>
  );
};

export default FadeElement;
