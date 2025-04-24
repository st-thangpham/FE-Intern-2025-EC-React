import React from 'react';
import Banner from './components/Banner';
import BannerReserved from './components/BannerReserved';
import Knowledge from './components/Knowledge';
import MainBanner from './components/MainBanner';
import PetList from './components/PetList';
import ProductList from './components/ProductList';
import SellerList from './components/SellerList';

const Home = () => {
  return (
    <>
      <MainBanner />
      <PetList />
      <BannerReserved />
      <ProductList />
      <SellerList />
      <Banner />
      <Knowledge />
    </>
  );
};

export default Home;
