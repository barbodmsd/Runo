import React from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <Stack direction='row' alignItems={'center'} sx={{
        bgcolor:'teal',
        height:60,
        px:'50px'
      }} gap='20px'>
        <Link to='/'>
          <Button sx={{color:'white'}}>Home</Button>
        </Link>
        <Link to='/about'>
          <Button sx={{color:'white'}}>About</Button>
        </Link>
        <Link to='/article'>
          <Button sx={{color:'white'}}>Article</Button>
        </Link>
        <Link to='/blogs'>
          <Button sx={{color:'white'}}>Blogs</Button>
        </Link>
      </Stack>
    </>
  );
}
