import Route from '../model/route';
import routes from '../data/routes';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="flex justify-between md:justify-end">
      <div className="grid items-center justify-between w-full grid-cols-2 gap-4 py-2 md:gap-6 md:py-0 md:w-auto md:grid md:grid-cols-4">
        {routes.map((r: Route) => (
          <Link href={r.url} passHref key={r.id}>
            <div className="flex items-center gap-2 cursor-pointer">
              <a>{r.text}</a>
              {r.icon}
            </div>
          </Link>
        ))}
        <Link href={'/cart'}>
          <motion.button
            className="flex items-center justify-center w-full py-2 text-center text-white bg-yellow-300 rounded-md"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <div className="flex items-center justify-center gap-2 font-bold">
              <p>Cart</p>
              <AiOutlineShoppingCart className="text-xl" />
            </div>
          </motion.button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
