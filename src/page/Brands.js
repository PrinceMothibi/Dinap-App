import React from "react";
import "./Brands.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: "#FEF4EA",
    opacity: [0.9, 0.8, 0.7],
  },
}));

const Brands = () => {
  return (
    <React.Fragment>
      <Box sx={{ width: "85%" }}>
        <h1>Brands We Stock</h1>
        <Stack spacing={4}>
          <Item>
            <div className="brandLayout">
              <h3 className="brandTitle">RIDLEY</h3>
              <img
                src="https://dinao-products.s3.us-east-2.amazonaws.com/Ridley-brand.avif"
                alt="Ridley Logo"
              ></img>
              <p>
                Ridley was founded in 1997. Since its inception, Belgium's
                largest bicycle manufacturer has been firmly at the forefront of
                product innovation. Its first innovative development was the
                conical headset, which was introduced in 2001 on the Ridley
                Damocles bike. This development subsequently became the standard
                in the bike industry. Since then, Ridley continues to astonish
                technologically with aerodynamic road bikes and gravel bikes.
              </p>
              <a href="https://www.dinao.store/brands/">
                Shop for Ridley products.
              </a>
            </div>
          </Item>
          <Item>
            <div className="brandLayout">
              <h3 className="brandTitle">BEMOOV</h3>
              <p>
                We are providers of balance, with a mission to enable children
                to find their own balance by living a joyful experience and a
                unique adventure with every getaway. BEMOOV children's bikes are
                therefore based on lightness, ergonomics, fun, durable quality,
                and of course, safety. Why? A child’s body shape is totally
                different from that of adults and yet, many children's bikes are
                not designed with this in mind. Instead, they are just adult’s
                bikes that have been made smaller. At BEMOOV, we have studied
                and adapted the geometry of each child's bike, chosen a
                high-quality lightweight aluminum for the frame and rims, light
                and comfortable and strong saddles, specially designed brakes
                and gearshifts… In short, we’ve addressed everything you need to
                have fun and learn balance without hurting yourself.
              </p>
              <a href="https://www.dinao.store/brands/">
                Shop for BEMOOV products.
              </a>
              <img
                sizes="80%"
                src="https://dinao-products.s3.us-east-2.amazonaws.com/Bemoov.avif"
                alt="BeMoov Logo"
              ></img>
            </div>
          </Item>
          <Item>
            <div className="brandLayout">
              <h3 className="brandTitle">CRONO</h3>
              <p>
                Crono is one of the world’s finest manufacturers of cycling
                shoes. The company was founded in 1973 by Giancarlo Stocco, but
                it really made its mark in the 1980s, when cyclists and
                triathletes like Timo Bracht embraced the brand’s shoes. Crono
                cycling shoes developed a reputation for comfort and resilience,
                leading many cycling teams to add them to their kit. Crono
                cycling shoes are characterised by a commitment to craft
                production and technical quality, every pair of shoes is made in
                Italy according to strict production standards, and they also
                include innovative technologies such as BOA fit systems which
                ensure total comfort and even pressure. That’s a recipe for a
                pure riding experience, wherever your desires take you.
              </p>
              <a href="https://www.dinao.store/brands/">
                Shop for CRONO products.
              </a>
              <img
                height="50px"
                src="https://dinao-products.s3.us-east-2.amazonaws.com/logo-crono-blk%402x-1.png"
                alt="Crono Logo"
              ></img>
            </div>
          </Item>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Brands;
