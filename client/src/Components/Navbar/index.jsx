import React from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar sx={{ bgcolor: "teal" }}>
            <Stack
              direction='row'
              alignItems={"center"}
              sx={{
                width: "100%",
                bgcolor: "teal",
                height: 60,
                px: "50px",
              }}
              gap='20px'>
              <Link to='/'>
                <Button sx={{ color: "white" }}>Home</Button>
              </Link>
              <Link to='/about'>
                <Button sx={{ color: "white" }}>About</Button>
              </Link>
              <Link to='/article'>
                <Button sx={{ color: "white" }}>Article</Button>
              </Link>
              <Link to='/blogs'>
                <Button sx={{ color: "white" }}>Blogs</Button>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
