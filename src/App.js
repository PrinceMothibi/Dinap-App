// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./header/page_navigator/NavBar";
import About from "./page/About";
import Brands from "./page/Brands";
import Shop from "./page/Shop";
import Footer from "./footer/Footer";
import Home from "./page/Home.js";
import Account from "./page/Account.js";
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
import { Layout } from "./layout";

function App() {
  Amplify.configure(awsconfig);
  // const location = useLocation();

  const { route } = useAuthenticator((context) => [context.route]);
  console.log(route);

  const [path, setPath] = useState(false);
  useEffect(() => {
    setPath(true);
    console.log(window.location.pathname);
  }, [route]);

  return (
    <Router>
      <div class="page_layout">
        <Routes>
          
          <Route path="/" element={<Layout />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
