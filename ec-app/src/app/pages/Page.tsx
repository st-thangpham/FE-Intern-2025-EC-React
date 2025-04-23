import Footer from '../../app/shared/components/layout/Footer';
import Header from '../../app/shared/components/layout/Header';
import React from 'react';
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
