import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const BlogCard = ({
  image,
  title,
  id,
  description,
  catTitle,
  createdAt,
}) => {
  return (
    <Link
      to={`/blog-details/${id}/${title.replaceAll(" ", "-").toLowerCase()}`}>
      {" "}
      <Card
        elevation={10}
        component={motion.div}
        sx={{ width: 295, height: 350, bgcolor: "transparent", pb: "5px" }}>
        <CardMedia
          sx={{
            height: 200,
            position: "relative",
            transition: "all 0.5s",
            filter: "brightness(50%)",
            "&:hover": { filter: "none", transform: "scale(1.05)" },
            cursor: "pointer",
            objectFit: "cover",
          }}
          image={image}
          title={title}>
          <Chip
            label={<h4 sx={{ fontWeight: "bold" }}>{catTitle}</h4>}
            sx={{
              position: "absolute",
              top: "5%",
              right: "5%",
              color: "white",
              boxShadow: "0 0 20px 1px rgba(0,0,0,0.5)",
              backdropFilter: "blur(2px)",
            }}
          />
        </CardMedia>
        <CardContent sx={{ textAlign: "right" }}>
          <Typography
            sx={{ fontSize: "12px", color: "grey" }}
            variant='h6'
            component='div'>
            {createdAt.slice(0, 10)}
          </Typography>
          <Typography
            sx={{ fontSize: "0.9em", fontWeight: "bolder", color: "white" }}
            variant='h5'
            component='div'>
            {title}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              textAlign: "right",
              fontWeight: "bold",
              color: "grey",
              textOverflow: "ellipsis",
              fontSize: "0.8em",
            }}>
            {description.slice(0, 200)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default function BlogList() {
  const [value, setValue] = useState("");
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `blog?populate=categoryId&${
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
  const items = blogs?.map((e, index) => (
    <BlogCard
      key={index}
      title={e?.title}
      image={import.meta.env.VITE_API + e?.img}
      catTitle={e?.categoryId?.title}
      createdAt={e?.createdAt}
      id={e?._id}
      description={e?.description}
    />
  ));
  return (
    <>
      <Stack sx={{ my: "50px", p: "50px" }}>
        {/* title */}
        <Box sx={{ textAlign: "right" }}>
          <Typography
            component='h2'
            sx={{ fontSize: "2em", color: "mainTxt", fontWeight: "bolder" }}>
            بیشترین علاقه مندی ها
          </Typography>
        </Box>
        {/* button */}
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
        {/* all blogs */}
        <Stack
          width={"100%"}
          gap={"20px "}
          justifyContent={"end"}
          direction='row'
          flexWrap={"wrap"}>
          {items}
        </Stack>
      </Stack>
    </>
  );
}
