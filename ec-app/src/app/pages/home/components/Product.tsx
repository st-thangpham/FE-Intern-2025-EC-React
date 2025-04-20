// src/app/shared/components/products/Products.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import GiftIcon from '../../../../assets/icons/icon-gift.svg';
import RightIcon from '../../../../assets/icons/icon-right.svg';

// Kiểu dữ liệu cho sản phẩm
interface Product {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  bonus: string;
  image: string;
  stock: number;
}

const formatPrice = (price: number): string =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
    price
  );

const formatSize = (size: number): string =>
  size >= 1000 ? `${size / 1000}kg` : `${size}g`;

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <section className='section section-products'>
      <div className='container'>
        <div className='section-header'>
          <div className='section-info'>
            <p className='section-subtitle'>
              Hard to choose right products for your pets?
            </p>
            <h2 className='section-title'>Our Products</h2>
          </div>
          <button className='btn btn-outline'>
            <span>View more</span>
            <img src={RightIcon} alt='View more' />
          </button>
        </div>

        <div className='section-content'>
          <ul className='list list-products row' id='list-products'>
            {products.map((product) => (
              <li key={product.id} className='list-item col-3 col-sm-6'>
                <div className='card card-product'>
                  <div className='card-media img-1x1'>
                    <img
                      className='card-img'
                      src={product.image}
                      alt={product.title}
                    />
                    <button
                      id={`product-${product.id}`}
                      className='btn-add'
                      disabled={product.stock <= 0}
                    >
                      {product.stock > 0 ? 'Add to cart' : 'Out of stock'}
                    </button>
                  </div>

                  <div className='card-information'>
                    <Link to='/' className='card-body'>
                      <h3 className='card-title'>{product.title}</h3>
                      <p className='card-details'>
                        <span className='card-label'>
                          Product:{' '}
                          <span className='card-content'>{product.type}</span>
                        </span>
                        <span className='detail-dot'>●</span>
                        <span className='card-label'>
                          Size:{' '}
                          <span className='card-content'>
                            {formatSize(product.size)}
                          </span>
                        </span>
                      </p>
                      <p className='card-value'>{formatPrice(product.price)}</p>
                    </Link>

                    <div className='card-footer'>
                      <img
                        className='card-icon'
                        src={GiftIcon}
                        alt='Gift Icon'
                      />
                      <span className='detail-dot'>●</span>
                      <span className='card-attached'>{product.bonus}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Product;
