import CartList from './components/CartList';
import CartSummary from './components/CartSummary';

const Cart = () => {
  return (
    <section className='section-cart'>
      <div className='container'>
        <h2 className='section-title'>Your Cart</h2>
        <div className='section-body'>
          <CartList />
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default Cart;
