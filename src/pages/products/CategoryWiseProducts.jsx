import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../Layout/Layout";
import axios from "axios";
import { SINGLE_CATEGORY } from "../../api/api";
import ProductCard from "../../components/products/ProductCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const CategoryWiseProducts = () => {
  const { categoryName } = useParams();
  // console.log("categoryName", categoryName);
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(SINGLE_CATEGORY + categoryName);
      // console.log("response", response.data.products);
      setProducts(response.data.products);
    };
    fetchProducts();
  }, [categoryName]);

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
          Products of {categoryName}
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

export default CategoryWiseProducts;
