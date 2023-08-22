import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { productsDB } from "../../backend/productsDB";
import "./ProductDescriptionModule.css";
import { CartContext, CartProvider } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

const ProductDescription = () => {
  const { productID } = useParams();
  const { cartState, cartDispatch } = useContext(CartContext);
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  function getProductDetails(productsDB, productID) {
    return productsDB.find((product) => product._id === productID);
  }

  const product = getProductDetails(productsDB, productID);

  const { _id, name, price, discount, rating, category, img, description } =
    product;
  const { des1, des2, des3 } = description;

  function getDiscountPercent() {
    const listp = parseFloat(price.replaceAll(",", ""));
    const discountp = parseFloat(discount.replaceAll(",", ""));

    return ((listp - discountp) / listp) * 100;
  }

  useEffect(() => {
    document.title = `${name}`;
  }, []);

  return (
    <>
      <Navbar />
      <div className="productDescriptionPage">
        <div className="imageSectionDiv">
          <img src={img} className="descriptionImage" alt="" />
        </div>

        <section className="descriptionSection">
          <h2 className="descriptionName">{name}</h2>
          <div className="ratingDetails">
            Rating:
            <FontAwesomeIcon icon={faStar} className="starIcon" /> {rating}
          </div>
          <div className="descriptionDetails">
            <h4 style={{ textAlign: "left" }}>Features: </h4>

            <ul className="descriptionPoints">
              <li>
                <p>{des1}</p>
              </li>
              <li>
                <p>{des2}</p>
              </li>
              <li>
                <p>{des3}</p>
              </li>
            </ul>
            <div className="descriptionPrice">
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "0px",
                }}
              >
                Price:
              </h4>
              <h2 className="descriptionDiscountPrice">
                <span className="rupeeIcon">&#x20B9;</span>
                {discount}{" "}
                <span className="discountPercent">
                  ({getDiscountPercent().toFixed(2)}% OFF)
                </span>
              </h2>

              <h4 className="descriptionListedPrice">
                <span className="rupeeIcon">&#x20B9;</span>
                {price}
              </h4>
            </div>

            <div className="buttonSection">
              {cartState.cart.some((p) => p._id === product._id) ? (
                <button
                  onClick={() => {
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    });
                  }}
                  className="addToCartBtn"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
                  REMOVE FROM CART
                </button>
              ) : (
                <button
                  onClick={() => {
                    cartDispatch({ type: "ADD_TO_CART", payload: product });
                  }}
                  className="addToCartBtn"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
                  ADD TO CART
                </button>
              )}

              {wishlistState.wishlist.some((p) => p._id === product._id) ? (
                <button
                  onClick={() => {
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: product,
                    });
                  }}
                  className="addToWishlistBtn"
                >
                  <FontAwesomeIcon icon={faHeart} className="wishlistIcon" />
                  ADDED TO WISHLIST
                </button>
              ) : (
                <button
                  onClick={() => {
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    });
                  }}
                  className="addToWishlistBtn"
                >
                  <FontAwesomeIcon icon={faHeart} className="wishlistIcon" />
                  ADD TO WISHLIST
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDescription;
