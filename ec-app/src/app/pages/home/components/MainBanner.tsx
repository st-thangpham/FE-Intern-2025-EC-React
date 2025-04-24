import React from 'react';

import MainBannerImage from '@assets/imgs/hero-banner.png';
import PlayIcon from '@assets/icons/icon-play.svg';

const MainBanner: React.FC = () => {
  return (
    <section className="section section-banner main-banner">
      <div className="section-img">
        <img src={MainBannerImage} alt="Banner Main Image" />
      </div>

      <div className="section-wrapper">
        <div className="container">
          <div className="section-content">
            <h1 className="section-title">
              One more friend
              <span className="section-subtitle">Thousands more fun!</span>
            </h1>
            <p className="section-description">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            <div className="section-btn">
              <button className="btn btn-outline">
                <span>View Intro</span>
                <img src={PlayIcon} alt="Play icon" />
              </button>

              <button className="btn btn-primary">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
