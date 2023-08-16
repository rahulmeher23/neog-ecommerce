import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Account = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    document.title = `LAMA | Your Account`;
  }, []);

  return (
    <div>
      <h1>This is Accounts Page</h1>
      <button onClick={() => setIsLoggedIn(false)} className="shopNowBtn">
        LOGOUT
      </button>
    </div>
  );
};

export default Account;
