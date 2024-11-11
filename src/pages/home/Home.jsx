import React from "react";

import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Grid2 as Grid,
  Container,
  Typography,
} from "@mui/material";

import Layout from "../../Layout/Layout";
import CategoryCard from "../../components/category/CategoryCard";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const categories = [
  { keyword: "beauty", imageURL: "./media/beauty.jpeg" },
  { keyword: "fragrances", imageURL: "./media/fragrances.jpg" },
  { keyword: "furniture", imageURL: "./media/furniture.jpg" },
  { keyword: "groceries", imageURL: "./media/groceries.jpg" },
  { keyword: "home-decoration", imageURL: "./media/home-decoration.jpeg" },
  {
    keyword: "kitchen-accessories",
    imageURL: "./media/kitchen-accessories.jpg",
  },
  { keyword: "laptops", imageURL: "./media/laptops.jpg" },
  { keyword: "mens-shirts", imageURL: "./media/mens-shirts.png" },
  { keyword: "mens-shoes", imageURL: "./media/mens-shoes.jpg" },
  { keyword: "mens-watches", imageURL: "./media/mens-watches.png" },
  {
    keyword: "mobile-accessories",
    imageURL: "./media/mobile-accessories.png",
  },
  { keyword: "motorcycle", imageURL: "./media/motorcycles.jpg" },
  { keyword: "skin-care", imageURL: "./media/skin-care.jpeg" },
  { keyword: "smartphones", imageURL: "./media/smartphones.jpg" },
  {
    keyword: "sports-accessories",
    imageURL: "./media/sports-accessories.jpg",
  },
  { keyword: "sunglasses", imageURL: "./media/sunglasses.jpeg" },
  { keyword: "tablets", imageURL: "./media/tablets.jpg" },
  { keyword: "tops", imageURL: "./media/tops.jpeg" },
  { keyword: "vehicle", imageURL: "./media/vehicle.jpeg" },
  { keyword: "womens-bags", imageURL: "./media/women-bags.jpeg" },
  { keyword: "womens-dresses", imageURL: "./media/women-dresses.jpg" },
  { keyword: "womens-jewellery", imageURL: "./media/women-jewellery.jpeg" },
  { keyword: "womens-shoes", imageURL: "./media/women-shoes.jpg" },
  { keyword: "womens-watches", imageURL: "./media/women-watches.jpg" },
];

const Home = () => {
  return (
    <>
      <Layout>
        <div style={{ margin: "auto", width: "90%" }}>
          <Link to="/products">
            <img
              src="./media/banner.jpg"
              alt="banner image"
              style={{ width: "100%", marginTop: "80px" }}
            />
          </Link>

          {/* add product categories here */}

          <Container sx={{ margin: "1.5rem auto" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                paddingBlock: "1.4rem",
                fontSize: "2rem",
              }}
            >
              SHOP BY CATEGORY
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent="center"
                alignItems="center"
              >
                {categories.map((category) => (
                  <Grid key={category.keyword}>
                    <Link
                      to={category.keyword}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <CategoryCard props={category} />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>

          <img
            src="./media/cta.jpg"
            alt="call to action image"
            style={{ width: "100%", margin: "2rem auto" }}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
