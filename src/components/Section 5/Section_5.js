import React from "react";
import './Section_5.css'

const Section_5 = () => {
  return (
    <div className="Section5">
      <h1>Get up to 70% discount on selected products.</h1>
      <div className="Section5_first">
        <div className="Section5_content1">
          <div className="products">
            <div className="product1">
            <div className="discount1">40%</div>
              <div className="card-content">
                <p className="card-title1">Vitamin C 20%</p>
                <p className="card-price1">€3,89</p>
                <p className="card-old-price1">€6,49</p>
              </div>
            </div>

            <div className="product2">
              <div className="discount2">70%</div>
              <div className="card-content">
                <p className="card-title2">MAURICE LACROIX</p>
                <p className="card-price2">€675</p>
                <p className="card-old-price2">€2250</p>
              </div>
            </div>

            <div className="product3">
            <div className="discount3">45%</div>
              <div className="card-content">
                <p className="card-title3">Vitamin C 20%</p>
                <p className="card-price3">€3,57</p>
                <p className="card-old-price3">€6,49</p>
              </div>
            </div>
          </div>

          <span className="indicator first"></span>
          <span className="indicator second"></span>
          <span className="indicator third"></span>
          <span className="indicator forth"></span>

          <div className="Content_text">
            <p>
              Register now and take advantage of numerous <br /> discounted
              products. By signing up, you'll have access <br /> to exclusive
              offers and be able to earn points by
              <br /> purchasing products or simply by being an active <br />{" "}
              member. Unlock even better deals when you reach <br /> higher
              loyalty levels and enjoy the rewards of being a <br /> valued
              costumer.
            </p>
            <button>Get started for free</button>
          </div>
        </div>
      </div>

      <div className="Section5_second">
        <div className="Content2_text">
          <h2>
            Over 2M hotels worldwide,
            <br /> up to 70% off!
          </h2>
          <p>
            Take advantage of GPM. Travel now and get up to 70%
            <br /> of your next stay. With an extensive selection of<br /> more than 2M
            hotels and resorts around the world,
            <br /> you'll be able to find the ideal destination for your next
            <br /> holiday! Register now and start making the most of
            <br /> your vacation with GPM.Travel!
          </p>

          <button>Get started for free</button>
        </div>

        <div className="products2">
          <div className="image4"></div>
          <div className="image5"></div>
        </div>
      </div>
    </div>
  );
};

export default Section_5;
