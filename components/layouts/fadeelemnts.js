import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const FadeElement = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('active');
    }
  }, [control, inView]);

  const variants = {
    start: { opacity: 0, scale: 0.8 },
    active: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section ref={ref} variants={variants} initial={'start'} animate={'active'}>
      {children}
    </motion.section>
  );
};

export default FadeElement;
