import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";


export default function HideAppBar(props) {
  return (
    <>
      <Stack
        direction='row'
        alignItems={"center"}
        justifyContent='space-between'
        sx={{
          width: "100%",
          bgcolor: "secondaryBg",
          height: 60,
          px: "50px",
          position: "fixed",
          zIndex: 10,
        }}>
        <Stack>
          <Typography
            component={"h1"}
            sx={{ color: "whitesmoke", fontSize: "24px" ,fontWeight:'bolder'}}>
            <Link sx={{ color: "white" }}>RUNO</Link>
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"20px"}>
          <Link to='/about'>
            <Button sx={{ color: "white",fontSize: "1.2em" ,fontWeight:'bolder' }}>وبلاگ ها</Button>
          </Link>
          <Link to='/article'>
            <Button sx={{ color: "white",fontSize: "1.2em" ,fontWeight:'bolder' }}>مقالات</Button>
          </Link>
          <Link to='/blogs'>
            <Button sx={{ color: "white",fontSize: "1.2em" ,fontWeight:'bolder' }}>درباره ما</Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
