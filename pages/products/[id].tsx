import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Image from 'next/image';
import { FC } from 'react';
import PageLayoutView from '../../components/PageLayoutView';
import ProductPropertiesView from '../../components/ProductPropertiesView';
import { ProductResult, ProductsResponseData } from '../../model/products';

export const getStaticPaths: GetStaticPaths = async () => {
  const baseUrl: string = 'https://sandbox.ixaya.net/api/products';
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'X-API-KEY': 'kwk8wocoss0wwcw0s4ccs4gg4s8s8s4ow80wcs4s',
    },
  });

  const productsResult: ProductsResponseData = await res.json();

  const paths = productsResult.response.map((p: ProductResult) => ({
    params: { id: p.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const baseUrl: string = 'https://sandbox.ixaya.net/api/products';
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'X-API-KEY': 'kwk8wocoss0wwcw0s4ccs4gg4s8s8s4ow80wcs4s',
    },
  });

  const productsResponse: ProductsResponseData = await res.json();

  const product: ProductResult | undefined = productsResponse.response.find(
    (p) => p.id == params?.id
  );

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: { product },
  };
};

const ProductDetail: NextPage = ({
  product,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const p: ProductResult = product;
  return (
    <PageLayoutView>
      <div className="flex flex-col items-center px-4 text-center md:px-0">
        <header className="py-6">
          <h2 className="text-4xl font-bold">{p.title}</h2>
        </header>

        <div className="relative md:w-1/2">
          <div className="relative w-full">
            <Image
              src={p.image_url}
              width={200}
              height={120}
              layout="responsive"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col w-full gap-4 py-6 ">
            <ProductPropertiesView product={p} />
          </div>
        </div>
      </div>
    </PageLayoutView>
  );
};

export default ProductDetail;
