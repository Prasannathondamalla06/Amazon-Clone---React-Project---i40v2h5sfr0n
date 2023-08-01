import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";

import Cart from "../header/Cart";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data, onSelectedItem, selectedItems }) => {
  const product = data;
  console.log(product, "prod")

  const navigate = useNavigate();
  const isItem = selectedItems?.some((item) => item.id === product.id);

  const onClick = () => {
    navigate(`/product-details/${product.id}`);
  };

  return (
    <div>
      <Card style={{ width: "22rem" }}>
        <CardActionArea>
          <CardMedia
            onClick={onClick}
            component="img"
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              width: "15rem",
              height: "15rem",
              objectFit: "contain",
              alignItems:"center"
            }}
            alt="prouct"
            image={product.image}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              style={{
                overflow: "hidden",
                height: 40,
                width: 340,
                fontWeight: 1000,
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              style={{ fontWeight: 1000 }}
            >
              ₹{product.price}
            </Typography>
            <Typography>
              {" "}
              <Rating name="read-only" value={product.rating.rate} readOnly />
            </Typography>

            <Typography>
              {" "}
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "8px", width: "100%", textAlign: "center" }}
                disabled={isItem}
                onClick={() => {
                  onSelectedItem(product);
                }}
              >
                Add to Cart
              </Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <CardActions></CardActions>

      {/* <Button variant="contained" color="primary">
        Add to Cart
      </Button> */}
    </div>
  );
};

export default ProductCard;
