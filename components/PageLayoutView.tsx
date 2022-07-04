import React from 'react';
import { PageLayoutProps } from '../model/pageLayout';
import HeaderView from './HeaderView';

const PageLayoutView = ({ children }: PageLayoutProps) => {
  return (
    <div className="h-screen pb-4 overflow-scroll">
      <HeaderView />

      {children}
    </div>
  );
};

export default PageLayoutView;
