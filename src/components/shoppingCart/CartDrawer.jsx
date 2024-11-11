import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Divider, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

const CartDrawer = ({ state, func: setState }) => {
  const itemsInCart = useSelector((state) => state.cart.products);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const shoppingList = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
        position: "relative",

        height: "100vh",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", padding: "1rem 0rem" }}
      >
        Shopping cart
      </Typography>
      <Divider />

      <Box>
        {itemsInCart.map((item) => (
          <ItemCard key={item.id} props={item} />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
          position: "sticky",
          width: "100%",
          bottom: 0,
          backgroundColor: "white",
          borderTop: "1px solid #d3d3d3",
        }}
      >
        <Button
          sx={{
            width: "70%",
            backgroundColor: "skyblue",
            color: "black",
            paddingBlock: "0.5rem",
          }}
        >
          Proceed to order
        </Button>
      </Box>
    </Box>
  );

  // when no items in cart
  //   if (itemsInCart.length == 0) {
  //     return <p>Nothing in cart!</p>;
  //   }

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>{"right"}</Button>
        <Drawer
          anchor={"right"}
          //   open={state["right"]}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {shoppingList("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default CartDrawer;
