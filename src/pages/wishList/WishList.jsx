import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import { Box, Grid2 as Grid } from "@mui/material";
import ProductCard from "../../components/products/ProductCard";
import { useLocation } from "react-router-dom";

const WishList = () => {
  const productsInWishlist = useSelector((state) => state.wishList);

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          {productsInWishlist.map((product) => (
            <Grid key={product.id} item="true" xs={2} sm={4} md={6}>
              <ProductCard props={product} wishList={true} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default WishList;
