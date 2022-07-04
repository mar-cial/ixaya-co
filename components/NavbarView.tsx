import Route from '../model/route';
import routes from '../data/routes';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  navbarVariants,
  navbarChildVariants,
} from '../animations/navbarVariants';

const NavbarView = () => {
  return (
    <motion.nav
      className="flex flex-col items-center justify-center text-center"
      variants={navbarVariants}
      animate="enter"
      initial="hidden"
      exit={'hidden'}
      key="nav-bar"
    >
      {routes.map((r: Route) => (
        <motion.div variants={navbarChildVariants} key={r.id}>
          <Link href={r.url}>
            <div className="flex items-center gap-4 font-bold text-white cursor-pointer">
              <a>{r.text}</a>
              {r.icon}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default NavbarView;
