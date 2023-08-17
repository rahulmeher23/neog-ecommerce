import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./MobileFiltersModule.css";
import { categoryDB } from "../../backend/categoryDB";

const MobileFilters = () => {
  const category = document.querySelector(".category-content");
  const price = document.querySelector(".price-content");
  const rating = document.querySelector(".rating-content");

  const [catDown, setCatDown] = useState(true);
  const [priceDown, setPriceDown] = useState(false);
  const [ratingDown, setRatingDown] = useState(false);

  return (
    <>
      <div>MobileFilters</div>
      <div className="filters">
        <div className="category-filters">
          <div
            className="init-display"
            onClick={() => handleCaretDown("category")}
          >
            <p>Filter by Category</p>
            <FontAwesomeIcon className="cat-caret" icon={faCaretDown} />
          </div>

          <div className="category-content  drop-down-hide">
            <ul className="categoryFilterList">
              <li
                // onClick={() => {
                //   filterDispatch({ type: "CATEGORY", payload: "All" });
                // }}
                className="categoryFilter"
              >
                All
              </li>

              {categoryDB.map((cat) => {
                const { name } = cat;
                return (
                  <Link className="cat-filter">
                    <li
                      //   onClick={() => {
                      //     filterDispatch({ type: "CATEGORY", payload: name });
                      //   }}
                      className="categoryFilter"
                    >
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="price-filters">
          <div
            className="init-display"
            onClick={() => handleCaretDown("price")}
          >
            <p>Filter by Price</p>
            <FontAwesomeIcon className="price-caret" icon={faCaretDown} />
          </div>

          <div className="price-content drop-down-hide">
            <div className="price-fill-div">
              <p className="price-max">Max: </p>
              <input
                // onChange={handlePriceChange}
                type="number"
                className="price-input"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        <div className="rating-filter">
          <div
            className="init-display"
            onClick={() => handleCaretDown("rating")}
            // value={rating}
          >
            <p>Filter by Ratings</p>
            <FontAwesomeIcon className="rating-caret" icon={faCaretDown} />
          </div>

          <div className="rating-content drop-down-hide">
            <form className="ratings-form">
              <div className="ratingFilterList">
                <li className="rating">
                  <input
                    className="rating"
                    type="radio"
                    value="All"
                    name="rating"
                    // onChange={handleFormChange}
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
                    // onChange={handleFormChange}
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
                    // onChange={handleFormChange}
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
                    // onChange={handleFormChange}
                  />
                  <label for="rating-5">
                    <FontAwesomeIcon icon={faStar} className="starIcon " />
                    &gt; 3
                  </label>
                </li>
              </div>
            </form>
          </div>
        </div>

        {/* Filters End */}
      </div>
    </>
  );
};

export default MobileFilters;
