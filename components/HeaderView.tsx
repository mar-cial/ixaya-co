import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import NavbarView from './NavbarView';

const HeaderView: FC = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="flex justify-between px-6 py-4 text-2xl font-bold">
        <button onClick={handleMenuClick}>
          <AiOutlineMenu />
        </button>
        <Link href={'/'} passHref>
          <a>Ixaya Co.</a>
        </Link>
        <Link href={'/cart'} passHref>
          <a>
            <AiOutlineShoppingCart />
          </a>
        </Link>
      </header>

      <AnimatePresence>{openMenu && <NavbarView />}</AnimatePresence>
    </>
  );
};

export default HeaderView;
