import { Stack } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems='center'
        height={200}
        fontSize={"2em"}
        bgcolor={"secondaryBg"}
        color={"white"}>
        Footer
      </Stack>
    </>
  );
}
