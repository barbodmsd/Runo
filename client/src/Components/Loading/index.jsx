import React from "react";
import {metronome} from 'ldrs' 
import { Box } from "@mui/material";
export default function Loading() {
    metronome.register()
  return (
    <Box sx={{
        position:'fixed',
        bgcolor:'rgba(0,0,0,0.7)',
        inset:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backdropFilter:'blur(5px)',
        zIndex:100000
    }}>
      <l-metronome size='55' speed='1.6' color='white'></l-metronome>
    </Box>
  );
}
