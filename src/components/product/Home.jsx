import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import Banner from "./Banner";

const Home = ({ data, onSelectedItem, selectedItems }) => {
  return (
    <>
      <Banner />

      <Container maxWidth="lg" sx={{ marginTop: 10 }} className="product">
        <Grid container spacing={2}>
          {data.map((data) => {
            return (
              <Grid key={data.id} item md={4} >
              <div className="card-wrapper">
              <ProductCard
                  data={data}
                  selectedItems={selectedItems}
                  onSelectedItem={onSelectedItem}
                />
              </div>
                
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
