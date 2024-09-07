import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function BlogList() {
  return (
    <>
      <Stack sx={{ my: "50px", p: "50px" }}>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            component='h2'
            sx={{ fontSize: "2em", color: "mainTxt", fontWeight: "bolder" }}>
            بیشترین علاقه مندی ها
          </Typography>
        </Box>
        <Box sx={{textAlign:'right'}}>
          <Stack direction='row' gap='10px'>
            <Button sx={{ color: "mainTxt" }}>همه</Button>
            <Button sx={{ color: "mainTxt" }}>همع</Button>
            <Button sx={{ color: "mainTxt" }}>همه</Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
