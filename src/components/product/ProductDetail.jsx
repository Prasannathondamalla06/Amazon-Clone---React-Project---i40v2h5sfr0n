import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import zIndex from "@material-ui/core/styles/zIndex";

const ProductDetail = ({ onSelectedItem, selectedItems }) => {
  const params = useParams();

  const user = auth?.currentUser?.email;

  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${params.id}`
      )
      .then((response) => {
        console.log("res", response.data);
        setProductInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);
  const isItem = selectedItems.some((item) => item.id === productInfo.id);

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Card>
          <CardActionArea
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <CardMedia
              component="img"
              style={{
                padding: "20px",
                width: "22rem",
                height: "22rem",
                objectFit: "contain",
                cursor: "zoom-in",
              }}
              alt="prouct"
              image={productInfo.image}
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                style={{
                  fontWeight: "700",
                }}
              >
                {productInfo.title}
              </Typography>
              <Rating name="read-only" value={productInfo.rating} readOnly />

              <Typography
                gutterBottom
                variant="body1"
                color="textSecondary"
                component="p"
                style={{ fontWeight: 1000 }}
              >
                ₹{productInfo.price}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                style={{
                  wordWrap: "break-word",
                  textAlign: "justify",
                  width: "90%",
                }}
              >
                {productInfo.description}
              </Typography>

              {!user ? <Button
                variant="contained"
                style={{ margin: "20px", backgroundColor: "orange" }}
                onClick={() => navigate('/login')}
              >
                Login to Proceed
              </Button> : <Button
                variant="contained"
                style={{ margin: "20px", backgroundColor: "orange" }}
                onClick={() => navigate('/checkout')}
              >
                Buy Now
              </Button>}
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "20px", padding: "8px" }}
                disabled={isItem}
                onClick={() => {
                  onSelectedItem(productInfo);
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
