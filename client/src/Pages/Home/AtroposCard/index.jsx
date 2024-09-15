import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Stack, Typography } from "@mui/material";
import "atropos/css";
import Atropos from "atropos/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchData from "../../../Utils/fetchData";
import "./AtroposCard.css";

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
                  {title.slice(0, 25)}
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
                    fontSize: "0.9em",
                    fontWeight: "bolder",
                  }}>
                  {title.slice(25)}
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
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    (async () => {
      const res = await fetchData("blog?page=1&limit=10");
      setBlogs(res.blogs);
    })();
  }, []);

  const items = blogs?.map((e, index) => (
    <SwiperSlide key={index}>
      <BlogCard
        image={import.meta.env.VITE_API + e?.img}
        title={e?.title}
        id={e?._id}
      />
    </SwiperSlide>
  ));

  return (
    <Box height={"400px"} position={"relative"}>
      {/* Swiper navigation buttons */}
      <Box className='next' sx={{ zIndex: 10 }}>
        <ArrowForwardRoundedIcon />
      </Box>
      <Box className='prev' sx={{ zIndex: 10 }}>
        <ArrowBackRoundedIcon />
      </Box>
      
      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop={true}
        slidesPerView={4}
        modules={[Navigation]}
        className='atroposCard'>
        {items}
      </Swiper>
    </Box>
  );
}
