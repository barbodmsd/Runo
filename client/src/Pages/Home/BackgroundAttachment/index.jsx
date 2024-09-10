import { Box, Chip, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";

export default function BackgroundAttachment() {
  const [bg, setBg] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("banner");
      setBg(res.banners[0]);
    })();
  }, []);
  return (
    <Stack
      direction={"row"}
      height={"80vh"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
      sx={{
        mb:'50px',
        backgroundImage: `url(${import.meta.env.VITE_API + bg?.img})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.5)",
        }}>
        <Chip
          label={<h4 sx={{ fontWeight: "bold" }}>{bg?.categoryId?.title}</h4>}
          sx={{
            color: "white",
            boxShadow: "0 0 20px 1px rgba(0,0,0,0.5)",
            backdropFilter: "blur(2px)",
          }}
        />
        <Stack width={"80%"}>
          <Typography sx={{ color: "white", textAlign: "right" }}>
            {bg?.description}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
