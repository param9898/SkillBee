import React from "react";
import "./Featured.scss";

export const Featured = () =>  {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right <span>freelance </span><br />
            services, right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./src/search.png" alt="" />
              <input type="text" placeholder='Search for any service...' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./src/woman.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;