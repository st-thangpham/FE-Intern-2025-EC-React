import React from 'react';

import BannerImg from '../../../../assets/imgs/banner-2.png';
import PlayIcon from '../../../../assets/icons/icon-play.svg';

const Banner: React.FC = () => {
  return (
    <section className="section section-banner">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-content">
            <h2 className="section-title">
              Adoption
              <span className="section-subtitle">
                We need help. so do they.
              </span>
            </h2>
            <p className="section-description">
              Adopt a pet and give it a home, it will be love you back
              unconditionally.
            </p>
            <div className="section-btn">
              <button className="btn btn-primary">Explore Now</button>
              <button className="btn btn-outline">
                <span>View Intro</span>
                <img src={PlayIcon} alt="Play icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="section-img">
          <img src={BannerImg} alt="Banner 2 Left Image" />
        </div>
      </div>
    </section>
  );
};
export default Banner;
