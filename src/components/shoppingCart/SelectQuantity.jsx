import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { updatedQuantity } from "../../features/cart/cartSlice";

const SelectQuantity = ({ q, id }) => {
  const [quantity, setQuantity] = React.useState(q);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setQuantity(event.target.value);

    dispatch(updatedQuantity({ itemID: id, quantity: event.target.value }));
  };

  const menuItems = Array.from({ length: 5 }, (_, index) => (
    <MenuItem key={index + 1} value={index + 1}>
      {index + 1}
    </MenuItem>
  ));

  return (
    <FormControl sx={{ m: 1, width: 56 }} size="small">
      {/* <InputLabel id="demo-select-small-label">{quantity}</InputLabel> */}
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={quantity}
        label=""
        onChange={handleChange}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}

        {menuItems.map((menuItem) => menuItem)}
      </Select>
    </FormControl>
  );
};

export default SelectQuantity;
