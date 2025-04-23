import React from 'react';

import BlogImg from '../../../../assets/imgs/blog1.png';
import RightIcon from '../../../../assets/icons/icon-right.svg';

const Knowledge: React.FC = () => {
  return (
    <section className="section section-products">
      <div className="container">
        <div className="section-header">
          <div className="section-info">
            <p className="section-subtitle">You already know ?</p>
            <h3 className="section-title">Useful pet knowledge</h3>
          </div>
          <button className="btn btn-outline">
            <span>View more</span>
            <img src={RightIcon} alt="Left button" />
          </button>
        </div>
        <div className="section-content">
          <ul className="list list-products row">
            <li className="list-item col-4 col-sm-12">
              <a className="card" href="/">
                <div className="card-media img-3x2">
                  <img
                    className="card-img"
                    src={BlogImg}
                    alt="Knowledge Image"
                  />
                </div>
                <div className="card-information">
                  <div className="card-tag">
                    <span>Pet knowledge</span>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      What is a Pomeranian? How to Identify Pomeranian Dogs
                    </h3>
                    <p className="card-description">
                      The Pomeranian, also known as the Pomeranian (Pom dog), is
                      always in the top of the cutest pets. Not only that, the
                      small, lovely, smart, friendly, and skillful circus dog
                      breed.
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-item col-4 col-sm-12">
              <a className="card" href="/">
                <div className="card-media img-3x2">
                  <img
                    className="card-img"
                    src={BlogImg}
                    alt="Knowledge Image"
                  />
                </div>
                <div className="card-information">
                  <div className="card-tag">
                    <span>Pet knowledge</span>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      What is a Pomeranian? How to Identify Pomeranian Dogs
                    </h3>
                    <p className="card-description">
                      The Pomeranian, also known as the Pomeranian (Pom dog), is
                      always in the top of the cutest pets. Not only that, the
                      small, lovely, smart, friendly, and skillful circus dog
                      breed.
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-item col-4 col-sm-12">
              <a className="card" href="/">
                <div className="card-media img-3x2">
                  <img
                    className="card-img"
                    src={BlogImg}
                    alt="Knowledge Image"
                  />
                </div>
                <div className="card-information">
                  <div className="card-tag">
                    <span>Pet knowledge</span>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      What is a Pomeranian? How to Identify Pomeranian Dogs
                    </h3>
                    <p className="card-description">
                      The Pomeranian, also known as the Pomeranian (Pom dog), is
                      always in the top of the cutest pets. Not only that, the
                      small, lovely, smart, friendly, and skillful circus dog
                      breed.
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Knowledge;
