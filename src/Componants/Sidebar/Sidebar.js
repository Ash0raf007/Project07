import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import logo from "./../assets/logoooo.PNG";
import v1 from "./../assets/1.PNG";
import v2 from "./../assets/2.PNG";
import v3 from "./../assets/3.PNG";
import v4 from "./../assets/4.PNG";
import v5 from "./../assets/5.PNG";
import alert from "./../assets/Alert.png";
import "./Sidebar.css";
import avatar from "./../assets/avatar.jpg";

import Appbar from "../Appbar/Appbar";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#202020" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          style={{ backgroundColor: "#181818", color: "white !important" }}
        >
          <Toolbar>
            <IconButton
              color="white !important" /////
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <img src={alert} alt="" />
            </Typography>
            <Appbar />
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#181818",
              color: "white !important",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <img
            src={logo}
            style={{
              width: "150px",
              alignItems: "center",
              backgroundSize: "cover",
              padding: "0px",
              marginTop: "5px",
              marginBottom: "0px",
            }}
            alt="logo"
          />
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List style={{ marginTop: "0px" }}>
            <ListItem style={{ cursor: "pointer" }}>
              <img src={v1} alt="logo" />
              <ListItemText primary="Alarts" />
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>
              <img src={v2} alt="logo" />

              <ListItemText primary="Training" />
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>
              <img src={v3} alt="logo" />
              <ListItemText primary="Automation" />
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>
              <img src={v4} alt="logo" />
              <ListItemText primary="Portfolio" />
            </ListItem>
            <ListItem style={{ cursor: "pointer" }}>
              <img src={v5} alt="logo" />
              <ListItemText primary="Tranding" />
            </ListItem>
            <div className="lowend">
              <img
                src={avatar}
                style={{
                  width: "60px",
                  borderRadius: "50px",
                  backgroundSize: "cover",
                }}
                alt="logo"
              />
              <p>Moni Roy</p>
            </div>
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </>
  );
}
