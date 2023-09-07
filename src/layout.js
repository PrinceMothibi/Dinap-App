import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./header/page_navigator/NavBar";
import Home from "./page/Home";
import Brands from "./page/Brands";
import Account from "./page/Account";
import About from "./page/About";
import { BrowserRouter as Route } from "react-router-dom";
import { I18n } from "aws-amplify";
import {
  Authenticator,
  Button,
  Flex,
  Heading,
  useAuthenticator,
  useTheme,
  View,
  UseAuthenticator,
} from "@aws-amplify/ui-react";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return <View textAlign="center" padding={tokens.space.large}></View>;
    },

    SignIn: {
      Header() {
        // return authHeader('Sign in');
      },
      Footer() {
        const { toResetPassword, toSignUp } = useAuthenticator();
        const { tokens } = useTheme();

        return (
          <Flex
            padding={`0 ${tokens.space.xl} 0 ${tokens.space.xl}`}
            justifyContent="space-between"
          >
            <Button
              fontWeight="normal"
              padding="0px"
              onClick={toResetPassword}
              size="small"
              variation="link"
            >
              Forgot Password?
            </Button>
            <Button
              fontWeight="normal"
              padding="0px"
              onClick={toSignUp}
              size="small"
              variation="link"
            >
              Don’t have an account?{" "}
              <b style={{ paddingLeft: "5px" }}>Sign up</b>
            </Button>
          </Flex>
        );
      },
    },

    SignUp: {
      Header() {
        // return authHeader('Sign up');
      },
      Footer() {
        const { toSignIn } = useAuthenticator();

        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toSignIn}
              size="small"
              variation="link"
            >
              Already have an account?{" "}
              <b style={{ paddingLeft: "5px" }}>Sign in</b>
            </Button>
          </View>
        );
      },
    },
    ConfirmSignUp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
    },
    SetupTOTP: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
    },
    ConfirmSignIn: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
    },
    ResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
    },
    ConfirmResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
    },
  };

  return (
    <>
      <Navbar />
      <Authenticator components={components}>
        <Route exact path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Authenticator>
      <Footer />
    </>
  );
};
