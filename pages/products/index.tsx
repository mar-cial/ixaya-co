import axios, { AxiosResponse } from 'axios';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import PageLayoutView from '../../components/PageLayoutView';
import ProductCardView from '../../components/ProductCardView';
import { ProductsResponseData } from '../../model/products';

export const getStaticProps: GetStaticProps = async () => {
  let products;
  const baseUrl: string = 'https://sandbox.ixaya.net/api/products';
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'X-API-KEY': process.env.IXAYA_API_KEY!,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      products = json;
    })
    .catch((err) => console.log(err));

  return {
    props: {
      data: products,
    },
  };
};

const ProductsPage: NextPage = ({
  data,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const productsResponse: ProductsResponseData = data;
  return (
    <PageLayoutView>
      <main className="p-6">
        <header>
          <h2 className="text-4xl font-bold text-center">Products</h2>
        </header>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
          {productsResponse.response.map((product) => (
            <ProductCardView product={product} key={product.id} />
          ))}
        </section>
      </main>
    </PageLayoutView>
  );
};

export default ProductsPage;
