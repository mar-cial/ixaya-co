import { NextPage } from 'next';
import React from 'react';
import PageLayoutView from '../../components/PageLayoutView';

type Props = {};

const NewOrderPage: NextPage = (props: Props) => {
  return (
    <PageLayoutView>
      <h2>create new order</h2>
    </PageLayoutView>
  );
};

export default NewOrderPage;
