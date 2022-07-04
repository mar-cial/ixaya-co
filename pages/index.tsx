import { NextPage } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Homepage: NextPage = () => {
  return (
    <div className="h-screen overflow-scroll">
      <header className="grid items-center p-4 border-b-2 md:grid-cols-2">
        <Link href={'/'}>
          <a className="text-2xl font-semibold">E-commerce app.</a>
        </Link>

        <Navbar />
      </header>

      <main className="flex flex-col items-center justify-center p-4 text-center h-96">
        <h2 className="text-4xl font-semibold">
          The number one place to get all your products.
        </h2>
      </main>
    </div>
  );
};

export default Homepage;
