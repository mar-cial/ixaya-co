import { NextPage } from 'next';
import React from 'react';
import PageLayoutView from '../../components/PageLayoutView';

type Props = {};

const OrdersPage: NextPage = (props: Props) => {
  return (
    <PageLayoutView>
      <h2>Orders</h2>
    </PageLayoutView>
  );
};

export default OrdersPage;
