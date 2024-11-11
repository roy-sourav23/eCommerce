import React, { useState, useEffect } from "react";
import { ALL_PRODUCTS } from "../../api/api";
import Layout from "../../Layout/Layout";
import axios from "axios";
// import { SINGLE_CATEGORY } from "../../api/api";
import ProductCard from "../../components/products/ProductCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const AllProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(ALL_PRODUCTS);

      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);

  if (!products) {
    return <></>;
  }

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            margin: "2rem 0",
            textDecoration: "underline",
          }}
        >
          All Products
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          {products.map((product) => (
            <Grid key={product.id} item="true" xs={2} sm={4} md={6}>
              <ProductCard props={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default AllProducts;
