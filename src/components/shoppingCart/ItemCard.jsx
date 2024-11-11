import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveItemDialog from "./RemoveItemDialog";
import SelectQuantity from "./SelectQuantity";
const ItemCard = ({ props }) => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "90%",
          marginBlock: "1rem",
          //   paddingInline: "0.4rem",
          position: "relative",
        }}
      >
        <Box sx={{ margin: "auto 0" }}>
          <CardMedia
            component="img"
            sx={{ width: 70, height: 70 }}
            image={props.thumbnail}
            alt="Live from space album cover"
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="p"
              sx={{ fontWeight: "bold", marginBottom: "0.3rem" }}
            >
              {props.brand}
            </Typography>
            <Typography component="div" variant="p">
              {props.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary", fontSize: "14px" }}
            >
              Rs. {props.price}
              <span
                style={{
                  color: "#ff774c",
                  fontSize: "12px",
                  marginLeft: "0.3rem",
                }}
              >
                ({props.discountPercentage}% OFF)
              </span>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <span>quantity:</span>
              <SelectQuantity q={props.quantity} id={props.id} />
            </Box>
          </CardContent>
        </Box>

        <ClearIcon
          onClick={handleClickOpen}
          sx={{
            fontSize: "1rem",
            position: "absolute",
            right: "0.3rem",
            top: "0.3rem",
            cursor: "pointer",
          }}
        />
      </Card>
      <RemoveItemDialog
        open={openDialog}
        handleClose={handleClose}
        item={props}
      />
    </Box>
  );
};

export default ItemCard;
