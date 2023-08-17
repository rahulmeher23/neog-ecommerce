import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FilterContext } from "../../contexts/FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./ProductsModule.css";
import Navbar from "../../components/Navbar/Navbar";
import { categoryDB } from "../../backend/categoryDB";
import ProductCard2 from "../../components/ProductCard/ProductCard2";

const Products = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);
  const filtered = filterState;

  function handleFormChange(e) {
    const ratingVal = e.target.value;
    console.log(e.target.value);
    filterDispatch({ type: "RATINGS", payload: ratingVal });
  }

  function handlePriceChange(e) {
    console.log(e.target.value);
    let priceMaxValue = 0;

    priceMaxValue = e.target.value;
    filterDispatch({ type: "PRICE", payload: priceMaxValue });
  }

  useEffect(() => {
    document.title = `LAMA | Products`;
  }, []);

  return (
    <>
      <div className="productPageWrapper">
        <Navbar />
        <div className="products-mobile-heading">
          <h2>Products</h2>
        </div>

        <div className="productsPage">
          <div className="filters-wrapper">
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
                            filterDispatch({ type: "CATEGORY", payload: name });
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
                  <p className="price-max">Max: </p>
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
          </div>

          {filterState.filteredProducts.length === 0 ? (
            <div className="no-items-found">
              <p>Opps! No items found on your search.</p>
            </div>
          ) : (
            <div className="productsList">
              {filterState.filteredProducts.map((product) => {
                return <ProductCard2 {...product} key={product._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
