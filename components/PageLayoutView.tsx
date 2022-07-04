import React, { ReactNode } from 'react';
import HeaderView from './HeaderView';

type Props = {
  children: ReactNode;
};

const PageLayoutView = ({ children }: Props) => {
  return (
    <div className="h-screen pb-4 overflow-scroll">
      <HeaderView />

      {children}
    </div>
  );
};

export default PageLayoutView;
