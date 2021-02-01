import React from "react";
import "./Home.css";
import ProductList from "./ProductList";
import datas from "./data";

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <img
          className="banner__image"
          src="https://i.ytimg.com/vi/8PA0KlVNv30/maxresdefault.jpg"
          alt=""
        />
      </div>
      {datas.map((data, index) => (
        <ProductList
          key={index}
          title={data.title}
          desc={data.desc}
          products={data.products}
        />
      ))}
    </div>
  );
}

export default Home;
