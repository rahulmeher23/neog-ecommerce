import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./HomeModule.css";
import { Link } from "react-router-dom";
import { FilterContext } from "../../contexts/FilterContext";

const Home = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);

  useEffect(() => {
    document.title = `LAMA | Home`;
  }, []);

  return (
    <div className="homeCard">
      <div className="announcement-bar">
        <span>Limited Time Offer! All products OFF upto 50%. Shop Now!</span>
      </div>
      <Navbar />
      <h2 className="categories-heading">Categories</h2>

      <div className="categories">
        <CategoryCard />
      </div>

      <Link to="/products">
        <button
          className="exploreBtn"
          onClick={() => {
            filterDispatch({ type: "CATEGORY", payload: "All" });
          }}
        >
          Explore
        </button>
      </Link>

      {/* <div className="productsPage">
        <Products />
      </div> */}

      {/* <Link to="/products"> 
      <Navbar />
      <Products />
       </Link> */}

      {/* <ProductDescription /> */}
    </div>
  );
};

export default Home;
