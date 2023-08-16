import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";
import { productsDB } from "../../backend/productsDB";
import { Link } from "react-router-dom";

import "./ProductCardModule.css";

const ProductCard = (product) => {
  // return productsDB.map((product) => {
  const { name, price, discount, rating, category, img, description } = product;
  const { des1, des2, des3 } = description;
  return (
    <>
      <div className="productCard">
        <FontAwesomeIcon icon={faHeart} className="heartIcon" />
        <Link className="productRouterLink" to={`/products/${_id}`}>
          <img src={img} alt="v27" className="productImg" />

          <div className="cartContent">
            <h3 className="productName">{name}</h3>

            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="starIcon " />
              {rating}
            </div>

            <div className="priceDiv">
              <h3 className="discountPrice">
                <span>&#x20B9;</span>
                {discount}
              </h3>

              <h4 className="price">
                <span>&#x20B9;</span>
                {price}
              </h4>
            </div>
          </div>
        </Link>
        <button className="addToCart">
          <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
          ADD TO CART
        </button>
      </div>
    </>
  );
  // }
  // );
};

export default ProductCard;
