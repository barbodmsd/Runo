import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeSlider.css";
import { Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import fetchData from "../../../Utils/fetchData";

export default function HomeSlider() {
    const [slider,setSlider]=useState()
    useEffect(()=>{
        (async()=>{
            const res=await fetchData('slider')
            setSlider(res)
        })()
    },[])
    console.log(slider)
  return (
    <Box sx={{width:'100%',height:'60vh'}}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='SliderSwiper'>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Box>
  );
}
