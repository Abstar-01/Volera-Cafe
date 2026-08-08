import React, { useState } from "react";
import "./Navigation.css";

import logo from "../Icons/Logo-.png";
import ShoppingCart from "../Icons/ShoppingCart.png";
import User from "../Icons/User.png";

function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const links = ["Home", "Market", "Reward", "Gift Card"];

  return (
    <section className="Container">
      <img src={logo} alt="Starbucks Logo" className="Logo" width={"110px"} />
      <h1>VOLERA</h1>
      <section className="Nav">
        {/* Sliding green div */}
        <div
          className="backgroundPanel"
          style={{ left: `${activeIndex * 24}%` }}
        ></div>

        {links.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={() => setActiveIndex(index)}
            style={{
              color: activeIndex === index ? "white" : "black",
              zIndex: 1,
            }}
          >
            {item}
          </a>
        ))}
      </section>

      <img src={User} alt="" className="Profile" width={"40px"} />

      <div className="Cart">
        <img src={ShoppingCart} alt="" width={"35px"} />
      </div>
    </section>
  );
}

export default Navigation;
