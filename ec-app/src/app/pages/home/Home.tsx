import Banner from './components/Banner';
import BannerReserved from './components/BannerReserved';
import Knowledge from './components/Knowledge';
import MainBanner from './components/MainBanner';
import Pet from './components/Pet';
import ProductList from './components/ProductList';
import Seller from './components/Seller';

const Home = () => {
  return (
    <>
      <MainBanner />
      <Pet />
      <BannerReserved />
      <ProductList />
      <Seller />
      <Banner />
      <Knowledge />
    </>
  );
};

export default Home;
