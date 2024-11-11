import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddToCartButton from "../button/AddToCartButton";
import { Login } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useDispatch } from "react-redux";
import { addedToCart } from "../../features/cart/cartSlice";
import { createData } from "../../utils/utils";
import { removeFromWishList } from "../../features/wishList/wishListSlice";

const ProductCard = ({ props }) => {
  const location = useLocation();
  // console.log("location", location);

  const dispatch = useDispatch();
  return (
    <Card sx={{ width: 245, height: 450 }}>
      <Link to={`/products/${props.id}`}>
        <CardMedia
          sx={{ height: 300, width: "100%" }}
          image={props.thumbnail}
          title="green iguana"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {props.brand}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Rs. {props.price}
          <span style={{ color: "orange" }}>
            ({props.discountPercentage}%OFF)
          </span>
        </Typography>

        {location.pathname === "/wishlist" ? (
          <Button
            onClick={() => {
              dispatch(addedToCart(createData(props)));
              dispatch(removeFromWishList(props.id));
            }}
            variant="contained"
            sx={{
              padding: "0.6rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingBagOutlinedIcon sx={{ marginRight: "0.4rem" }} />
            Move to Bag
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
