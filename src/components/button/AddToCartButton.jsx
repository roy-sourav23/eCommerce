import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addedToCart } from "../../features/cart/cartSlice";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { createData } from "../../utils/utils";

// const createData = (props) => {
//   console.log("props", props);

//   return {
//     id: props.id,
//     thumbnail: props.thumbnail,
//     brand: props.brand,
//     title: props.title,
//     price: props.price,
//     discountPercentage: props.discountPercentage,
//     quantity: 1,
//     totalAmount: 0,
//   };
// };

const AddToCartButton = ({ props }) => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.cart.products);

  const foundProduct = selector.find((product) => product.id === props.id);

  return (
    <>
      <Button
        onClick={() => dispatch(addedToCart(createData(props)))}
        variant="contained"
        sx={{
          backgroundColor: "#EAAA00",
          padding: "0.6rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ShoppingBagOutlinedIcon sx={{ marginRight: "0.4rem" }} />
        {foundProduct ? "Added to Cart" : "Add to cart"}
      </Button>
    </>
  );
};

export default AddToCartButton;
