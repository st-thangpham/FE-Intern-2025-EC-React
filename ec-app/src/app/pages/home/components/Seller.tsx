import React from 'react';

import SellerImg from '../../../../assets/imgs/seller-logo.png';
import RightIcon from '../../../../assets/icons/icon-right.svg';

const Seller: React.FC = () => {
  return (
    <section className="section section-sellers">
      <div className="container">
        <div className="section-header">
          <div className="section-info">
            <p className="section-subtitle">Proud to be part of</p>
            <h2 className="section-title">Pet Sellers</h2>
          </div>
          <button className="btn btn-outline">
            <span>View all our sellers</span>
            <img src={RightIcon} alt="Left button" />
          </button>
        </div>
        <div className="section-content">
          <ul className="list list-sellers row">
            <li className="list-item col">
              <a className="seller" href="/">
                <img
                  className="seller-img"
                  src={SellerImg}
                  alt="Seller's Image"
                />
              </a>
            </li>
            <li className="list-item col">
              <a className="seller" href="/">
                <img
                  className="seller-img"
                  src={SellerImg}
                  alt="Seller's Image"
                />
              </a>
            </li>
            <li className="list-item col">
              <a className="seller" href="/">
                <img
                  className="seller-img"
                  src={SellerImg}
                  alt="Seller's Image"
                />
              </a>
            </li>
            <li className="list-item col">
              <a className="seller" href="/">
                <img
                  className="seller-img"
                  src={SellerImg}
                  alt="Seller's Image"
                />
              </a>
            </li>
            <li className="list-item col">
              <a className="seller" href="/">
                <img
                  className="seller-img"
                  src={SellerImg}
                  alt="Seller's Image"
                />
              </a>
            </li>
            <li className="list-item col">
              <a className="seller" href="/">
                <img
                  className="seller-img"
                  src={SellerImg}
                  alt="Seller's Image"
                />
              </a>
            </li>
            <li className="list-item col">
              <a className="seller" href="/">
                <img
                  className="seller-img"
                  src={SellerImg}
                  alt="Seller's Image"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Seller;
