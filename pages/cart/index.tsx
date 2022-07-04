import { NextPage } from 'next';
import React from 'react';
import PageLayoutView from '../../components/PageLayoutView';

type Props = {};

const CartPage: NextPage = (props: Props) => {
  return (
    <PageLayoutView>
      <h2>Cart!</h2>
    </PageLayoutView>
  );
};

export default CartPage;
