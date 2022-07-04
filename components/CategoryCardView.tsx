import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Category } from '../data/categories';

type Props = {
  category: Category;
};

const CategoryCardView = ({ category }: Props) => {
  return (
    <div className="flex flex-col w-full p-2">
      <div>
        <Image
          src={category.image}
          width={1400}
          height={788}
          layout="responsive"
        />
      </div>

      <div className="py-4 text-center">
        <h3 className="text-2xl font-semibold">{category.title}</h3>
      </div>

      <div className="grid gap-4 text-center">
        <p>{category.description}</p>

        <Link href={category.url}>
          <a className="py-2 text-white bg-sky-500">Check it out</a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCardView;
