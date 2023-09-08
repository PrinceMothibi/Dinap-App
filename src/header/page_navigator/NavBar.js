import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import Logo from "../logo_banner/Logo";
import {useAuthenticator, Button } from "@aws-amplify/ui-react";

const Navbar = () => {
  function logOut() {
    signOut();
    return (
      <NavLink to="/account" activeStyle>
        Logout
      </NavLink>
    );
  }

  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  return (
    <>
      <Nav>
        <Logo />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/brands" activeStyle>
            Brands
          </NavLink>
          <NavLink to="/shop" activeStyle>
            Shop
          </NavLink>
          {route !== "authenticated" ? (
            <NavLink to="/account" activeStyle>
              Login
            </NavLink>
          ) : (
            <Button onClick={() => logOut()}>Logout</Button>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
