import React from "react";
import { Nav, NavLink, NavMenu} from "./NavbarElements";

const AccountNav = () =>{
    return(
        <>
        <Nav>
            {/* <Logo /> */}
            <NavMenu>
                <NavLink to="/account" activeStyle>
                    Account</NavLink>
                <NavLink to="account/login" activeStyle>
                    Login
                </NavLink>
                <NavLink to="account/logout" activeStyle>
                    Log out
                </NavLink>
            </NavMenu>
        </Nav>
    </>
    );
};

export default AccountNav;