import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../contexts/WishlistContext";
import ProductCard2 from "../../components/ProductCard/ProductCard2";
import "./WishlistModule.css";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  useEffect(() => {
    document.title = `LAMA | Wishlist`;
  }, []);

  return (
    <div>
      <Navbar />
      {/* <h1>This is Wishlist Page</h1> */}

      {wishlistState.wishlist.length == 0 ? (
        <div className="wishlistEmpty">
          <h1>Your Wishlist is Empty!</h1>
          <Link to="/products">
            <button className="shopNowBtn">ADD NOW!</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="heading-name-container">
            <h3 className="heading-name">Wishlist</h3>
            <p className="item-count">
              You have {wishlistState.wishlist.length} items in your wishlists.
            </p>
          </div>
          <div className="wishlistPage">
            {wishlistState.wishlist.map((item) => {
              const { name, discount } = item;
              return (
                <>
                  <ProductCard2 {...item} key={item._id} />
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
