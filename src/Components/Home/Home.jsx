import React, { useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import { useStateValue } from "../../Context/contextProvider";

function Home() {
  const [{ searchQuery }] = useStateValue();
  const [products] = useState([
    {
      id: "12321341",
      title:
        "The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: 29.99,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
    },
    {
      id: "49538094",
      title:
        "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowel",
      price: 239.0,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._AC_SL1200_.jpg",
    },
    {
      id: "4903850",
      title: "Samsung LG49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      id: "23445930",
      title:
        "Amazon Echo (4th generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51cGlUCK5WL._AC_SL1000_.jpg",
    },
    {
      id: "3254354345",
      title:
        "New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
    {
      id: "90829332",
      title:
        "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 1094.98,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    },
  ]);
  // Filter products based on search query
  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;
  console.log("Search Query:", searchQuery);
  console.log("Filtered Products:", filteredProducts);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {filteredProducts.slice(0, 2).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>

        <div className="home__row">
          {filteredProducts.slice(2, 5).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>

        <div className="home__row">
          {filteredProducts.slice(5, 6).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
