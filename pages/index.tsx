import { NextPage } from 'next';
import CategoryCardView from '../components/CategoryCardView';
import HeaderView from '../components/HeaderView';
import PageLayoutView from '../components/PageLayoutView';
import categories from '../data/categories';

const Homepage: NextPage = () => {
  return (
    <PageLayoutView>
      <main className="p-12 text-center">
        <h2 className="text-4xl font-semibold">
          The number one place to get all your products.
        </h2>
      </main>

      <section className="grid px-6 md:grid-cols-3">
        {categories.map((c) => (
          <CategoryCardView category={c} />
        ))}
      </section>
    </PageLayoutView>
  );
};

export default Homepage;
