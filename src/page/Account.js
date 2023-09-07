import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./account-pages/Login";
import LogoutPage from "./account-pages/Logout";
import AccountNav from "./account-pages/AccountNavigator";

const Account=()=>{
    return(
        <React.Fragment>
            <div>
                <LoginPage/>
                <LogoutPage/>
            </div>
    </React.Fragment>
    );
    
};

export default Account;