// components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthenticator, View } from "@aws-amplify/ui-react";
import Navbar from "./header/page_navigator/NavBar";
import Footer from "./footer/Footer";

export function Layout() {
    const route = useAuthenticator((context)=>[context.route])

  return (
    <>
      <Navbar />
      <View>
        {route === "authenticated" ? "You are logged in!" : "Please Login!"}
      </View>
      <Footer />
      <Outlet />
    </>
  );
}
