import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";

export default function BlogList() {
  const [value, setValue] = useState("");
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        value !=""?
          `blog?filters[categoryId]=${
            value === "فشن"
              ? "66cccafc276bed12b1150cf6"
              : value === "سفر"
              ? "66cccae3276bed12b1150cf4"
              : value === "طبیعت"
              ? "66cccb04276bed12b1150cf8"
              : value === "ماجراجویی" && "66cccb0b276bed12b1150cfa"
          }`
          :'blog'
      );
      setBlogs(res.blogs);
      console.log(blogs);
    })();
  }, [value]);
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
        <Stack
          direction='row'
          gap='10px'
          justifyContent='end'
          sx={{ width: "100%", my: "20px" }}>
          <Button
            onClick={() => setValue("ماجراجویی")}
            sx={{ color: value === "ماجراجویی" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>ماجراجویی</h2>
          </Button>
          <Button
            onClick={() => setValue("سفر")}
            sx={{ color: value === "سفر" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>سفر</h2>
          </Button>
          <Button
            onClick={() => setValue("طبیعت")}
            sx={{ color: value === "طبیعت" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>طبیعت</h2>
          </Button>
          <Button
            onClick={() => setValue("فشن")}
            sx={{ color: value === "فشن" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>فشن</h2>
          </Button>
          <Button
            onClick={() => setValue("")}
            sx={{ color: value === "" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>همه</h2>
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
