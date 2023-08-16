import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { productsDB } from "../../backend/productsDB";
import { categoryDB } from "../../backend/categoryDB";
import ProductCard2 from "../../components/ProductCard/ProductCard2";
import "./ProductsModule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import ProductDescription from "../Single Product Page/ProductDescription";
import { FilterContext } from "../../contexts/FilterContext";

const Products2 = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);
  const filtered = filterState;
  let inputRangeValue = 0;

  function handleChange(e) {
    const val = e.target.value;
    inputRangeValue = val;

    document.querySelector(
      ".priceOutput"
    ).innerHTML = `<span>&#x20B9;</span> ${inputRangeValue}`;
    filterDispatch({ type: "PRICE", payload: val });
  }

  function handleFormChange(e) {
    const ratingVal = e.target.value;
    console.log(e.target.value);
    filterDispatch({ type: "RATINGS", payload: ratingVal });
  }

  let priceMaxValue = 0;
  function handlePriceChange(e) {
    console.log(e.target.value);
    priceMaxValue = e.target.value;
    filterDispatch({ type: "PRICE", payload: priceMaxValue });
  }

  return (
    <div className="products-container">
      <div className="header">
        <Navbar />
        <div className="products-mobile-heading">
          <h2>Products</h2>
        </div>
      </div>

      <div className="body">
        <div className="productsPage">
          {/* <div className="filters-wrapper"> */}
          <section className="filters hide-category">
            <div className="category-filter">
              <p className="categoryTitle">Categories</p>
              <ul className="categoryFilterList">
                <li
                  onClick={() => {
                    filterDispatch({ type: "CATEGORY", payload: "All" });
                  }}
                  className="categoryFilter"
                >
                  All
                </li>

                {categoryDB.map((cat) => {
                  const { name } = cat;
                  return (
                    <Link className="cat-filter">
                      <li
                        onClick={() => {
                          filterDispatch({
                            type: "CATEGORY",
                            payload: name,
                          });
                        }}
                        className="categoryFilter"
                      >
                        {name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="price-filter-container">
              <p className="price-filter-title">Price:</p>

              <div className="price-fill-div">
                {/* <p className="price-max">Max: </p> */}
                <input
                  onChange={handlePriceChange}
                  type="number"
                  className="price-input"
                  placeholder="Max"
                />
              </div>
            </div>

            <div className="rating-filters">
              <p className="categoryTitle">Ratings</p>

              <form className="ratings-form">
                <div className="ratingFilterList">
                  <li className="rating">
                    <input
                      className="rating"
                      type="radio"
                      value="All"
                      name="rating"
                      onChange={handleFormChange}
                    />

                    <label for="rating-5">
                      <FontAwesomeIcon icon={faStar} className="starIcon " />
                      All
                    </label>
                  </li>

                  <li className="rating">
                    <input
                      className="rating"
                      type="radio"
                      value="5"
                      name="rating"
                      onChange={handleFormChange}
                    />

                    <label for="rating-5">
                      <FontAwesomeIcon icon={faStar} className="starIcon " />5
                    </label>
                  </li>

                  <li className="rating">
                    <input
                      className="rating"
                      type="radio"
                      value="4"
                      name="rating"
                      onChange={handleFormChange}
                    />
                    <label for="rating-5">
                      <FontAwesomeIcon icon={faStar} className="starIcon " />
                      &gt; 4
                    </label>
                  </li>

                  <li className="rating">
                    <input
                      className="rating"
                      type="radio"
                      value="3"
                      name="rating"
                      onChange={handleFormChange}
                    />
                    <label for="rating-5">
                      <FontAwesomeIcon icon={faStar} className="starIcon " />
                      &gt; 3
                    </label>
                  </li>
                </div>
              </form>
            </div>
          </section>
          {/* </div> */}

          {
            (console.log("filterState", filterState),
            console.log("filtered", filtered),
            console.log(
              "filterState.filteredProducts",
              filterState.filteredProducts
            ),
            console.log("filterState.filterState", filterState.filterState))
          }

          <div className="productsList">
            {filterState.filteredProducts.length === 0 ? (
              <div>
                <p>Opps! No items found on your search.</p>
              </div>
            ) : (
              filterState.filteredProducts.map((product) => {
                return <ProductCard2 {...product} key={product._id} />;
              })
            )}
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Products2;
