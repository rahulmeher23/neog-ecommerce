import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./MobileFiltersModule.css";
import { categoryDB } from "../../backend/categoryDB";
import { FilterContext } from "../../contexts/FilterContext";

const MobileFilters = () => {
  const [catDown, setCatDown] = useState(false);
  const [priceDown, setPriceDown] = useState(false);
  const [ratingDown, setRatingDown] = useState(false);

  const { filterState, filterDispatch } = useContext(FilterContext);

  useEffect(() => {
    const cat = document.querySelector(".category-content");

    console.log(catDown, "catdown");

    if (catDown) {
      cat.className = cat.className.replace(
        "drop-down-hide",
        "drop-down-display"
      );
    } else {
      cat.className = cat.className.replace(
        "drop-down-display",
        "drop-down-hide"
      );
    }
  }, [catDown]);

  useEffect(() => {
    const price = document.querySelector(".price-content");

    console.log(priceDown, "pricedown");

    if (priceDown) {
      price.className = price.className.replace(
        "drop-down-hide",
        "drop-down-display"
      );
    } else {
      price.className = price.className.replace(
        "drop-down-display",
        "drop-down-hide"
      );
    }
  }, [priceDown]);

  useEffect(() => {
    const rating = document.querySelector(".rating-content");

    console.log(ratingDown, "ratingdown");

    if (ratingDown) {
      rating.className = rating.className.replace(
        "drop-down-hide",
        "drop-down-display"
      );
    } else {
      rating.className = rating.className.replace(
        "drop-down-display",
        "drop-down-hide"
      );
    }
  }, [ratingDown]);

  function handleFormChange(e) {
    const ratingVal = e.target.value;
    setRatingDown(!ratingDown);
    filterDispatch({ type: "RATINGS", payload: ratingVal });
  }

  function handlePriceChange(e) {
    console.log(e.target.value);
    let priceMaxValue = 0;

    priceMaxValue = e.target.value;
    filterDispatch({ type: "PRICE", payload: priceMaxValue });
  }

  return (
    <>
      <div className="filters">
        <div className="category-filters">
          <div
            className="init-display"
            onClick={() => {
              setCatDown(!catDown);
              if (priceDown) {
                setPriceDown(!setPriceDown);
              }
              if (ratingDown) {
                setRatingDown(!setRatingDown);
              }
            }}
          >
            <p>Filter by Category</p>
            <FontAwesomeIcon className="cat-caret" icon={faCaretDown} />
          </div>

          <div className="category-content-container">
            <div className="category-content  drop-down-hide">
              <ul className="categoryFilterList">
                <li
                  onClick={() => {
                    setCatDown(!catDown);
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
                          setCatDown(!catDown);
                          if (priceDown) {
                            setPriceDown(!setPriceDown);
                          }
                          if (ratingDown) {
                            setRatingDown(!setRatingDown);
                          }
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
          </div>
        </div>

        <div className="price-filters">
          <div
            className="init-display"
            onClick={() => {
              setPriceDown(!priceDown);
              if (catDown) {
                setCatDown(!setCatDown);
              }
              if (ratingDown) {
                setRatingDown(!setRatingDown);
              }
            }}
          >
            <p>Filter by Price</p>
            <FontAwesomeIcon className="price-caret" icon={faCaretDown} />
          </div>

          <div className="price-content-container">
            <div className="price-content drop-down-hide">
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
          </div>
        </div>

        <div className="rating-filter">
          <div
            className="init-display"
            onClick={() => {
              setRatingDown(!ratingDown);
              if (catDown) {
                setCatDown(!setCatDown);
              }
              if (priceDown) {
                setPriceDown(!setPriceDown);
              }
            }}
          >
            <p>Filter by Ratings</p>
            <FontAwesomeIcon className="rating-caret" icon={faCaretDown} />
          </div>

          <div className="rating-content-container">
            <div className="rating-content drop-down-hide">
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
          </div>
        </div>

        {/* Filters End */}
      </div>
    </>
  );
};

export default MobileFilters;
