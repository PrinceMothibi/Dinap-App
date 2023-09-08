import React from "react";
import LoginPage from "./account-pages/Login";
import LogoutPage from "./account-pages/Logout";

const Account = () => {
  return (
    <React.Fragment>
      <div>
        <LoginPage />
        <LogoutPage />
      </div>
    </React.Fragment>
  );
};

export default Account;
