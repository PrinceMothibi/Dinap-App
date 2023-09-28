import "./App.css";
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

function App() {
  const { route } = useAuthenticator((context) => [context.route]);
  console.log(route);

  return (
    <Router>
      <Container maxWidth="200vh" maxHeight="100vh">
        <Stack spacing={1}>
          <Item>
            <Navbar />
          </Item>
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
                  <RequireAuth>
                    <Shop />
                  </RequireAuth>
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
