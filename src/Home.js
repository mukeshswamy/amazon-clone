import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container"></div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/6_DesktopHero_Unrec_3000x1200-._CB419216629_.jpg"
        alt="main_img"
      />
      <div className="home__row">
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/31p+bB-uwNL._AC_SX368_.jpg"
          rating={3}
        />
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/41YmbwTw2fL._AC_US320_FMwebp_QL65_.jpg"
          rating={3}
        />
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/41Z8xpykF8L._AC_SX184_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/315Up+ELgEL._AC_SX368_.jpg"
          rating={3}
        />
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/21OWOIM1wML._AC_SX368_.jpg"
          rating={3}
        />
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/31EpYNDwamL._AC_SX368_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/41bdE73aspL._AC_SX368_.jpg"
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home;
