import React, { useEffect, useState } from "react";
// import Layout from "../../Layout/Layout";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

// import ImageGallery from "../components/product/ImageGallery";
// import ProductInfo from "../components/product/ProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SINGLE_PRODUCT } from "../../api/api";
import Layout from "../../Layout/Layout";
import ImageGallery from "../../components/products/ImageGallery";
import ProductInfo from "../../components/products/ProductInfo";

const SingleProductPage = () => {
  const { prodId } = useParams();

  const [prod, setProd] = useState(null);

  useEffect(() => {
    const fetchProductInfo = async () => {
      const response = await axios.get(SINGLE_PRODUCT + prodId);

      setProd(response.data);
    };
    fetchProductInfo();
  }, [prodId]);

  if (!prod) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, maxWidth: "1280px", margin: "0 1rem " }}>
        <Typography sx={{ padding: "1rem 0" }}>Clothes</Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageGallery props={prod} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ProductInfo props={prod} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default SingleProductPage;
