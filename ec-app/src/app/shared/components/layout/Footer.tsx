import React from 'react';
import { Link } from 'react-router-dom';

import MonitorLogo from '@assets/imgs/monito-logo.png';
import FacebookIcon from '@assets/icons/icon-facebook.svg';
import TwitterIcon from '@assets/icons/icon-twitter.svg';
import InstagramIcon from '@assets/icons/icon-instagram.svg';
import YoutubeIcon from '@assets/icons/icon-youtube.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-action">
          <div className="footer-form">
            <span className="form-title">
              Register now so you don't miss our programs
            </span>
            <form className="form form-register">
              <input type="text" placeholder="Enter your Email" />
              <button className="btn btn-primary">Subscribe Now</button>
            </form>
          </div>

          <div className="footer-nav">
            <nav className="navigation">
              <ul className="list-nav">
                <li className="list-item">
                  <Link className="nav" to="/">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="nav" to="/">
                    Category
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="nav" to="/">
                    About
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="nav" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="footer-social">
              <ul className="list-social">
                <li className="list-item">
                  <a className="social" href="/">
                    <img src={FacebookIcon} alt="Facebook Icon" />
                  </a>
                </li>
                <li className="list-item">
                  <a className="social" href="/">
                    <img src={TwitterIcon} alt="Twitter Icon" />
                  </a>
                </li>
                <li className="list-item">
                  <a className="social" href="/">
                    <img src={InstagramIcon} alt="Instagram Icon" />
                  </a>
                </li>
                <li className="list-item">
                  <a className="social" href="/">
                    <img src={YoutubeIcon} alt="YouTube Icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <span className="footer-copyright">
            © 2022 Monito. All rights reserved.
          </span>
          <h2 className="footer-logo">
            <Link to="/" title="Homepage">
              <img
                className="logo-img"
                src={MonitorLogo}
                alt="Footer Monito Logo"
              />
            </Link>
          </h2>
          <div className="footer-policy">
            <ul className="list-policy">
              <li className="list-item">
                <Link className="policy" to="/">
                  Terms of Service
                </Link>
              </li>
              <li className="list-item">
                <Link className="policy" to="/">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
