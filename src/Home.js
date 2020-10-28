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
          id={123452}
          title="The Lean Startup best mobile now jsust Search"
          price={129.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/31p+bB-uwNL._AC_SX368_.jpg"
          rating={3}
        />
        <Product
          id={123455}
          title="The interactive See the section about running tests for more information."
          price={293.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/41Z8xpykF8L._AC_SX184_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id={123456}
          title="The Lean Startup Builds the app for."
          price={129.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/315Up+ELgEL._AC_SX368_.jpg"
          rating={3}
        />
        <Product
          id={123458}
          title="The Lean Startup If you aren’t satisfied with"
          price={329.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/21OWOIM1wML._AC_SX368_.jpg"
          rating={3}
        />
        <Product
          id={123459}
          title="scripts so you can tweak them. At this point you’re on your own."
          price={25.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/31EpYNDwamL._AC_SX368_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id={123450}
          title="The Lean Startup you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it."
          price={23.99}
          image="https://images-eu.ssl-images-amazon.com/images/I/41bdE73aspL._AC_SX368_.jpg"
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home;
