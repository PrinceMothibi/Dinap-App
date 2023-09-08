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
// import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { RequireAuth } from "./RequireAuth";

function App() {
  // Used to connect to aws Amplify which handles authentication.
  // Amplify.configure(awsconfig);

  const { route } = useAuthenticator((context) => [context.route]);
  console.log(route);

  return (
    <Router>
      <div class="page_layout">
        <Navbar />
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
        </Routes>
        <Routes>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
