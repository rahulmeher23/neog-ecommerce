import React, { useContext } from "react";
import "./CategoryCardModule.css";
import { categoryDB } from "../../backend/categoryDB";
import { Link, useParams } from "react-router-dom";
import { FilterContext } from "../../contexts/FilterContext";

const CategoryCard = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);
  // console.log("category", category);

  return categoryDB.map((category) => {
    const { id, name, img } = category;
    return (
      <>
        <Link to={`/products`} className="link-category-card">
          {/* <Link to={`/products/${name}`}> */}
          <div
            onClick={() => {
              filterDispatch({ type: "CATEGORY", payload: name });
            }}
            className="categoryCard"
            key={id}
          >
            <div className="categoryImg">
              <img src={img} />
            </div>
            <div className="category-name">{name}</div>
          </div>
        </Link>
      </>
    );
  });
};

export default CategoryCard;
