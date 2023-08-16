import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./ProductCardModule.css";
import ProductDescription from "../../pages/Single Product Page/ProductDescription";
import { productsDB } from "../../backend/productsDB";
import cartReducer from "../../reducer/cartReducer";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/wishlistContext";

const ProductCard2 = (product) => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  // console.log(" CART STATE:: ", state);
  // console.log(" Wishlist STATE:: ", wishlistState);
  const { _id, name, price, discount, rating, category, img, description } =
    product;

  function getDiscountPercent() {
    const listp = parseFloat(price.replaceAll(",", ""));
    const discountp = parseFloat(discount.replaceAll(",", ""));

    // console.log(((listp - discountp) / listp) * 100);

    return ((listp - discountp) / listp) * 100;
  }

  // return productsDB.map((product) => {

  return (
    <div className="ProductCardWrapper" key={_id}>
      <div className="productCard">
        <div>
          {wishlistState.wishlist.some((p) => p._id === product._id) ? (
            <FontAwesomeIcon
              onClick={() => {
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: product,
                });
              }}
              icon={faHeart}
              className="heartIcon"
              style={{ color: "red" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
              }}
              icon={faHeart}
              className="heartIcon"
            />
          )}
        </div>

        <Link className="productRouterLink" to={`/products/${_id}`}>
          <img src={img} alt="" className="productImg" />

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
                <span className="rupeeIcon">&#x20B9;</span>
                {price}
              </h4>
            </div>

            {/* <div className="discount-percent">
              <h4>
                <span>({getDiscountPercent().toFixed(2)}% OFF)</span>
              </h4>
            </div> */}
          </div>
        </Link>

        <div>
          {cartState.cart.some((p) => p._id === product._id) ? (
            <button
              onClick={() => {
                cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
              }}
              className="removeFromCart"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
              REMOVE FROM CART
            </button>
          ) : (
            <button
              onClick={() => {
                cartDispatch({ type: "ADD_TO_CART", payload: product });
              }}
              className="addToCart"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
  // });
};

export default ProductCard2;
