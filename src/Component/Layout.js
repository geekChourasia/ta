import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ListItemIcon from "@mui/material/ListItemIcon";

import { GrAppsRounded } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { GrDocumentConfig } from "react-icons/gr";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { IoBagHandle } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import InputBase from "@mui/material/InputBase";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSunDimLight } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";

import { alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Grid } from "@mui/material";
import TableComponent from "./Table";
import JobsContainer from "./JobsContainer";
import SideDetails from "./SideDetails";

const drawerWidth = 240;

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

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     marginTop:"20px",
//     border:"2px solid red",
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

export default function MiniDrawer() {
  //   const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };

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
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <BiMessageRoundedDetail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <IoIosNotificationsOutline />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Paper elevation={3} sx={{ flexGrow: 1, pt: 0.5, pb: 0.5 }}>
        <Box>
          <Toolbar>
            <Avatar />
            <Typography sx={{ ml: 1, mr: 2 }}>Practice Homepage</Typography>

            <Paper
              elevation={3}
              component="form"
              sx={{
                p: "1px 1px",
                display: "flex",
                alignItems: "center",
                width: 280,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <CiSearch />
              </IconButton>
            </Paper>

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                width: "25%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {/* <Badge badgeContent={4} color="error"> */}
                <PiSunDimLight size="20px" />
                {/* </Badge> */}
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {/* <Badge badgeContent={4} color="error"> */}
                <BiMessageRoundedDetail size="20px" />
                {/* </Badge> */}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                {/* <Badge badgeContent={17} color="error"> */}
                <IoIosNotificationsOutline size="20px" />
                {/* </Badge> */}
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                {/* <Badge badgeContent={17} color="error"> */}
                <IoSettingsOutline size="20px" />
                {/* </Badge> */}
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <RxAvatar size="20px" />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
        {/* {renderMobileMenu}
      {renderMenu} */}
      </Paper>

      <Box sx={{ display: "flex", mt: 2 }}>
        <Paper
          elevation={3}
          style={{
            marginTop: "20px",
            marginLeft: "0px",
            height: "100vh",
            borderRadius: "0 20px 0 0",
            width: "60px",
          }}
        >
          <List style={{ marginTop: "20px" }}>
            <Box sx={{ display: "block" }}>
              <Box
                sx={{
                  minHeight: "100%",
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon>
                  <GrAppsRounded
                    size="20px"
                    style={{ marginBottom: "24px", color: "#2196f3" }}
                  />
                </ListItemIcon>

                <ListItemIcon>
                  <GiNotebook size="20px" style={{ marginBottom: "24px" }} />
                </ListItemIcon>

                <ListItemIcon>
                  <GrDocumentConfig
                    size="20px"
                    style={{ marginBottom: "24px" }}
                  />
                </ListItemIcon>

                <ListItemIcon>
                  <HiOutlineDocumentSearch
                    size="20px"
                    style={{ marginBottom: "24px" }}
                  />
                </ListItemIcon>
                <ListItemIcon>
                  <IoBagHandle size="20px" style={{ marginBottom: "24px" }} />
                </ListItemIcon>

                <ListItemIcon>
                  <AiOutlineMenuUnfold
                    size="20px"
                    style={{ marginBottom: "24px" }}
                  />
                </ListItemIcon>
                <ListItemIcon>
                  <FaRegHandshake
                    size="20px"
                    style={{ marginBottom: "24px" }}
                  />
                </ListItemIcon>
                <ListItemIcon>
                  <RiCustomerService2Line
                    size="20px"
                    style={{ marginBottom: "24px" }}
                  />
                </ListItemIcon>
                <ListItemIcon>
                  <TfiMenuAlt size="20px" style={{ marginBottom: "24px" }} />
                </ListItemIcon>
                {/* <ListItemText  sx={{ opacity: open ? 1 : 0 }} /> */}
              </Box>
            </Box>
          </List>
        </Paper>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={9.2} lg={9.2}>
              <Box sx={{ mt: 3, mb: 3 }}>
              <JobsContainer />
              </Box>
              <TableComponent />
            </Grid>
            <Grid item xs={12} sm={12} md={2.7} lg={2.7}>
              <SideDetails />
            </Grid>

            <Grid item xs={12} sm={12} md={9.2} lg={9.2}></Grid>

            <Grid item xs={12} sm={12} md={2.7} lg={2.7}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
