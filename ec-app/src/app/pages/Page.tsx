import React from 'react';

import Footer from '@shared/components/layout/Footer';
import Header from '@shared/components/layout/Header';
import { Outlet } from 'react-router-dom';

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Page;
