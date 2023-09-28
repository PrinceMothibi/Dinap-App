import React from "react";
import "./Home.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const boxDesign = {
  bgcolor: "#F9F8F8",
  height: "90%",
  color: "#293644",
};

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={boxDesign}>
        <section className="intro">
          <h2>Dinao Business to Business</h2>
          <p>
            This is our B2B site. To see out B2C site please visit{" "}
            <a color="#293644" href="https://www.dinao.store/">this link.</a>
          </p>
        </section>
        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            We are driven by our desire to get South Africans active through the
            exciting sport of cycling! By providing high quality, world-class
            equipment affordably.
          </p>
          {/* <img
                src="https://dinao-products.s3.us-east-2.amazonaws.com/dinos.png"
                alt="Monkey business"
              ></img> */}
        </section>
      </Box>
    </React.Fragment>
  );
};

export default Home;
