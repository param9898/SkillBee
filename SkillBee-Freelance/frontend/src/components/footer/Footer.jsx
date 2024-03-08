import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Photography</span>
            
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            
            <span>Podcast</span>
            
            <span>Become a Seller</span>
            
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>SkillBee</h2>
            
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              
              <img src="/img/instagram.png" alt="" />
            </div>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
