import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import {
  AppBar,
  Badge,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingBagOutlined as ShoppingBagOutlinedIcon,
  More as MoreIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartDrawer from "../shoppingCart/CartDrawer";

import { logout } from "../../features/auth/AuthSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const loginSelector = useSelector((state) => state.auth.login);
  const userLoggedIn = loginSelector.userLoggedIn;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cartState, setCartState] = React.useState({
    right: false,
  });

  const productsInCartSelector = useSelector((state) => state.cart.products);
  const numberOfItemsInCart = productsInCartSelector.length;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userLoggedIn ? (
        <div>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(logout());
              handleMenuClose();
            }}
          >
            Logout
          </MenuItem>
        </div>
      ) : (
        <MenuItem
          onClick={() => {
            navigate("/accounts/login");
            handleMenuClose();
          }}
        >
          Login
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <span>Profile</span>
      </MenuItem>
      <MenuItem>
        <Link to="/wishlist">
          <IconButton
            size="large"
            aria-label=""
            color="inherit"
            sx={{ textDecoration: "none", color: "black" }}
          >
            <Badge badgeContent={0} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
          <span>Wishlist</span>
        </Link>
      </MenuItem>
      <MenuItem onClick={(state) => setCartState({ right: !state.right })}>
        <IconButton size="large" aria-label="" color="inherit">
          <Badge badgeContent={numberOfItemsInCart} color="error">
            <ShoppingBagOutlinedIcon />
          </Badge>
        </IconButton>
        <span>Bag</span>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "white", color: "black", maxHeight: "64px" }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              eCommerce
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Search sx={{ backgroundColor: "#f5f5f5" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>

            <IconButton
              size="large"
              aria-label=""
              color="inherit"
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Link to="/wishlist">
                <Badge badgeContent={0} color="error">
                  <FavoriteBorderIcon />
                </Badge>
              </Link>
            </IconButton>

            <IconButton
              size="large"
              aria-label=""
              color="inherit"
              onClick={(state) => setCartState({ right: !state.right })}
            >
              <Badge badgeContent={numberOfItemsInCart} color="error">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <CartDrawer state={cartState} func={setCartState} />
    </Box>
  );
}
