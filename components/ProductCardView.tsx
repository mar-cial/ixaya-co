import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IProductCardView } from '../model/products';

const ProductCardView = ({ product }: IProductCardView) => {
  return (
    <article className="flex flex-col justify-between h-full p-4 ">
      <div>
        {/* <-------------------- image --------------------> */}
        <div className="relative ">
          <Image
            src={product.image_url}
            layout="responsive"
            width={190}
            height={120}
            className="object-contain"
          />
        </div>
        {/* <-------------------- info --------------------> */}
        <header className="py-6">
          <p className="font-mono text-sm text-gray-500">TITLE</p>
          <h2 className="text-lg font-bold">{product.title}</h2>
        </header>
        <div className="grid gap-2">
          <div className="flex items-center justify-between pb-2 border-b-2">
            <p className="text-sm">CATEGORY</p>
            <p>{product.category}</p>
          </div>

          <div className="flex flex-col pb-1 border-b-2">
            <p className="text-sm">DESCRIPTION</p>
            <p>{product.short_description}</p>
          </div>

          <div className="flex items-center justify-between pb-2 border-b-2">
            <p className="text-sm">PRICE</p>
            <p>{`$${parseFloat(product.price).toFixed(2)}`}</p>
          </div>
        </div>
      </div>

      {/* <-------------------- button --------------------> */}
      <div className="grid">
        <Link href={`/products/${product.id}`}>
          <a className="w-full py-2 text-center bg-emerald-100 text-emerald-400">
            LEARN MORE
          </a>
        </Link>
      </div>
    </article>
  );
};

export default ProductCardView;
