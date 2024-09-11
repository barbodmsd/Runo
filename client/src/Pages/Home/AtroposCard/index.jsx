import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./AtroposCard.css";
import { Box, Stack, Typography } from "@mui/material";
import Atropos from "atropos/react";
import "atropos/css";

import { Pagination } from "swiper/modules";
import fetchData from "../../../Utils/fetchData";
import { Link } from "react-router-dom";

export const BlogCard = ({ image, id, title }) => {
  return (
    <Link to={`/blog-details/${id}/${title.replaceAll(" ", "-")}`}>
      <Stack
        className={"atropos"}
        component={Atropos}
        sx={{
          width: 300,
          height: 250,
          borderRadius: "15px",
        }}>
        <Box className={"atropos-scale"}>
          <Box className={"atropos-rotate"}>
            <Box className={"atropos-inner"}>
              <img
                src={image}
                data-atropos-offset='-5'
                width='100%'
                height='100%'
                style={{ borderRadius: "15px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "11%",
                  right: "7%",
                }}>
                <Typography
                  data-atropos-offset='0'
                  data-atropos-opacity='0.8;0.2'
                  sx={{
                    color: "white",
                    fontSize: "1em",
                    fontWeight: "bolder",
                  }}>
                  {title.slice(0, 20)}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "4%",
                  right: "7%",
                }}>
                <Typography
                  data-atropos-offset='8'
                  sx={{
                    color: "white",
                    fontSize: "1em",
                    fontWeight: "bolder",
                  }}>
                  {title.slice(21, 100)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Link>
  );
};
export default function AtroposCard() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("blog?page=1&limit=10");
      setBlogs(res.blogs);
      console.log(blogs);
    })();
  }, []);
  const items = blogs?.map((e, index) => (
    <BlogCard
      key={index}
      image={import.meta.env.VITE_API + e?.img}
      title={e?.title}
      id={e?._id}
    />
  ));
  return (
    <>
      {/* <Swiper pagination={true} modules={[Pagination]} className="atroposCard">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <Stack direction='row' flexWrap={"wrap"} gap={"20px"}>
        {items}
      </Stack>
    </>
  );
}
