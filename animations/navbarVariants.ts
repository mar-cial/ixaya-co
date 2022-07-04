import { Variants } from 'framer-motion';

export const navbarVariants: Variants = {
  enter: {
    height: 100,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
    backgroundColor: '#509CDC',
  },
  hidden: {
    height: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const navbarChildVariants: Variants = {
  enter: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -5,
  },
};
