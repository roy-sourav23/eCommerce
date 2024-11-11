import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { removedFromCart } from "../../features/cart/cartSlice";
import {
  addToWishList,
  removeFromWishList,
} from "../../features/wishList/wishListSlice";

const RemoveItemDialog = ({ open, handleClose, item }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Move From Cart"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to move this item from cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(removedFromCart(item.id));
              handleClose();
            }}
          >
            Remove
          </Button>

          <Button
            onClick={() => {
              dispatch(addToWishList({ ...item, quantity: 1 }));
              dispatch(removedFromCart(item.id));
              handleClose();
            }}
            autoFocus
          >
            move to wishlist
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default RemoveItemDialog;
