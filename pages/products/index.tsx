import { NextPage } from 'next';
import React from 'react';
import PageLayoutView from '../../components/PageLayoutView';

type Props = {};

const ProductsPage: NextPage = (props: Props) => {
  return (
    <PageLayoutView>
      <h2>ola mundo</h2>
    </PageLayoutView>
  );
};

export default ProductsPage;
