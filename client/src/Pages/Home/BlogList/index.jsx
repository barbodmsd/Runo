import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";

export default function BlogList() {
  const [value, setValue] = useState("");
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `blog?${
          value &&
          `filters[categoryId]=${
            value == "travel"
              ? "66cccae3276bed12b1150cf4"
              : value == "fashion"
              ? "66cccafc276bed12b1150cf6"
              : value == "nature"
              ? "66cccb04276bed12b1150cf8"
              : value == "adventure" && "66cccb0b276bed12b1150cfa"
          }`
        }`
      );
      setBlogs(res.blogs);
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
            onClick={() => setValue("adventure")}
            sx={{ color: value === "adventure" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>ماجراجویی</h2>
          </Button>
          <Button
            onClick={() => setValue("travel")}
            sx={{ color: value === "travel" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>سفر</h2>
          </Button>
          <Button
            onClick={() => setValue("nature")}
            sx={{ color: value === "nature" ? "mainTxt" : "white" }}>
            <h2 sx={{ fontWeight: "bolder" }}>طبیعت</h2>
          </Button>
          <Button
            onClick={() => setValue("fashion")}
            sx={{ color: value === "fashion" ? "mainTxt" : "white" }}>
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

// useEffect(() => {
//   (async () => {
//     const res = await fetchData(
//       `blog?${value && `filters[categoryId]=${catId}`}`
//     );
//     setBlogs(res.blogs);
//     console.log({blogs});
//   })();
// }, [value]);
// const handleClick = (e) => {
//   if (e == "all") {
//     setValue("all");
//     setCatId("");
//   } else if (e == "travel") {
//     setValue("travel");
//     setCatId("66cccae3276bed12b1150cf4");
//   } else if (e == "fashion") {
//     setValue("fashion");
//     setCatId("66cccafc276bed12b1150cf6");
//   } else if (e == "nature") {
//     setValue("nature");
//     setCatId("66cccb04276bed12b1150cf8");
//   } else if (e == "adventure") {
//     setValue("adventure");
//     setCatId("66cccb0b276bed12b1150cfa");
//   }
//   console.log({ value });
//   console.log({ catId });
// };
// const callBack=useCallback((e)=>{
//   if (e == "all") {
//     setValue("all");
//     setCatId('')
//   } else if (e == "travel") {
//     setValue("travel");
//     setCatId("66cccae3276bed12b1150cf4");
//   } else if (e == "fashion") {
//     setValue("fashion");
//     setCatId("66cccafc276bed12b1150cf6");
//   } else if (e == "nature") {
//     setValue("nature");
//     setCatId("66cccb04276bed12b1150cf8");
//   } else if (e == "adventure") {
//     setValue("adventure");
//     setCatId("66cccb0b276bed12b1150cfa");
//   }
//   console.log({value})
//   console.log({catId})
// },[value,catId])
