import React from "react";
import { Nav, NavLink, NavMenu} from "./NavbarElements";
import Logo from "../logo_banner/Logo";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Logo />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home</NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/brands" activeStyle>
                        Brands
                    </NavLink>
                    <NavLink to="/shop" activeStyle>
                        Shop
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;