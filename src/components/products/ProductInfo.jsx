import React from "react";
// import { ProductType } from "../../modal";
import { Box, Button, Rating, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddToCartButton from "../button/AddToCartButton";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../features/wishList/wishListSlice";

const ProductInfo = ({ props }) => {
  const dispatch = useDispatch();
  const previousPrice = Math.round(
    props.price + (props.price * props.discountPercentage) / 100
  );
  return (
    <Box
      sx={{
        maxWidth: { xs: "400px", md: "450px" },
        margin: { xs: "auto", md: "none" },
      }}
    >
      <Box
        sx={{
          diaplay: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ marginRight: "auto" }}>{props.brand}</span>
        {/* <span>{props.sku}</span> */}
      </Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "left", margin: "1rem 0", fontWeight: "500" }}
      >
        {props.title}
      </Typography>
      <Rating
        name="read-only"
        value={Math.round(props.rating)}
        readOnly
        sx={{ fontSize: "14px" }}
      />{" "}
      <span style={{ fontSize: "14px", color: "var(--text2-color)" }}>
        {props.reviews.length} reviews
      </span>
      <Typography
        variant="h4"
        sx={{
          margin: "3rem 0",
          position: "relative",
          padding: "0 2rem",

          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "5rem",

          ":before": {
            content: "'₹'",
            position: "absolute",
            top: "0",
            left: "1rem",
            fontSize: "1.4rem",
          },
        }}
      >
        {props.price}

        <span
          style={{
            position: "absolute",
            left: "9.5rem",
            top: 0,
            fontSize: "1.2rem",
            padding: "0 0.2rem ",
            textDecoration: "line-through",
          }}
        >
          ₹{previousPrice}
        </span>
        <span
          style={{
            fontSize: "1rem",
            backgroundColor: "var(--accent-color)",
            padding: "0.3rem 0.5rem",
            fontFamily: "var(--button-font)",
          }}
        >
          -{props.discountPercentage}%
        </span>
      </Typography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        {props.tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: "var(--background-color)",
              padding: "0.3rem 1rem",
              fontFamily: "var(--button-font)",
              border: "1px solid var(--secondary-color)",
              fontSize: "1rem",
            }}
          >
            {tag}
          </span>
        ))}
      </Typography>
      <Typography
        sx={{
          padding: "1rem 0",
          color: "var(--success-color)",
          fontSize: "2rem",
        }}
      >
        {props.availabilityStatus}
      </Typography>
      <Typography
        sx={{
          ":before": {
            content: '"*"',
            color: "var(--error-color)",
          },
        }}
      >
        {props.warrantyInformation}
      </Typography>
      <Box
        sx={{
          marginTop: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
          }}
        >
          <AddToCartButton props={props} />

          <Button
            variant="contained"
            onClick={() => dispatch(addToWishList(props))}
            sx={{
              padding: "0.7rem 1rem",
              backgroundColor: "var(--text2-color)",
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </Button>
        </Box>

        <Typography
          sx={{
            padding: "0.2rem 1rem",
            fontSize: "14px",
            ":before": {
              content: '"*"',

              color: "var(--error-color)",
            },
          }}
        >
          {props.shippingInformation}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductInfo;
