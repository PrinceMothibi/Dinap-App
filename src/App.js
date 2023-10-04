import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./header/page_navigator/NavBar";
import About from "./page/About";
import Brands from "./page/Brands";
import Shop from "./page/Shop";
import Footer from "./footer/Footer";
import Home from "./page/Home.js";
import Account from "./page/Account.js";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { RequireAuth } from "./RequireAuth";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Item from "./Item";
import { commerce } from "./lib/commerce.js";
import {Products} from "./components";



function App() {
  const { route } = useAuthenticator((context) => [context.route]);
  const [productsArray, setProducts] = useState([]);

  const fetchProducts = async() =>{
    const {data} = await commerce.products.list();
    setProducts(data);
  };

  useEffect(()=>{
    fetchProducts();
  },[])

  console.log(productsArray);


  return (
    <Router>
      <Container maxWidth="200vh" maxHeight="100vh">
        <Stack spacing={1}>
          <Navbar />
          <Item>
            <Routes>
              <Route
                path="/account"
                element={
                  <RequireAuth>
                    <Account />
                  </RequireAuth>
                }
              />
              <Route
                path="/shop"
                element={
                    <Products productsList={productsArray}/>
                }
              />
              <Route exact path="/" element={<Home />} />
              <Route
                path="/brands"
                element={
                  <RequireAuth>
                    <Brands />
                  </RequireAuth>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </Item>
          <Item>
            <Footer />
          </Item>
        </Stack>
      </Container>
    </Router>
  );
}

export default App;
