import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#232f3e",
        flexWrap:"wrap"
      }}
    >
      <div className="main">
        <ul>
          <h3>
          <li>Get to know</li>
          </h3>
         <li><a href ="#">About Us</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Press Releases</a></li>
          <li><a href="#">Amazon Science</a></li>
        </ul>
      </div>

      <div className="main">
        <h3>
          <li>Connect with Us</li>
        </h3>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
      </div>

      <div className="main">
        <h3>
          <li>Make Money with Us</li>
        </h3>
        <li><a href="#">Sell on Amazon</a></li>
        <li><a href="#">Sell under Amazon Accelerator</a></li>
        <li><a href="#">Protect and Build Your Brand</a></li>
        <li><a href="#">Amazon Global Selling</a></li>
        <li><a href="#">Become an Affiliate</a></li>
        <li><a href="#">Fulfilment by Amazon</a></li>
        <li><a href="#">Advertise Your Products</a></li>
        <li><a href="#">Amazon Pay on Merchants</a></li>
      </div>

      <div className="main">
        <h3>
          <li>Let Us Help You</li>
        </h3>
        <li><a href="#">COVID-19 and Amazon</a></li>
        <li><a href="#">Your Account</a></li>
        <li><a href="#">Returns Centre</a></li>
        <li><a href="#">100% Purchase Protection</a></li>
        <li><a href="#">Amazon App Download</a></li>
        <li><a href="#">Help</a></li>
      </div>
    </div>
  );
}
