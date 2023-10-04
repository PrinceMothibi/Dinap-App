import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";


const classes ={
  root: {
      maxWidth: '100%',
  },
  media: {
      height: 0,
      paddingTop: '56.25%', //16:9
  },
  cardActions: {
      display: 'flex',
      justifyContent: "flex-end"
  },
  cardContent: {
      display: "flex",
      justifyContent: "flex-between",
  }
};

const Product = ({ product }) => {

  return (
    <Card sx={classes.root}>
      <CardMedia
        sx={classes.media}
        image={product.image.url}
        title={product.name}
      />

      <CardContent>
        <div sx={classes.cardContent}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p"/>
      </CardContent>

      <CardActions disableSpacing sx={classes.cardActions}>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
