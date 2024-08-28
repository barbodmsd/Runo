import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeSlider.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import fetchData from "../../../Utils/fetchData";
import Loading from "../../../Components/Loading";

export default function HomeSlider() {
  const [slider, setSlider] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("slider");
      setSlider(res?.sliders);
    })();
  }, []);
  const items=slider?.map((e,index)=><SwiperSlide key={index}><img style={{objectFit:'fill'}} src={import.meta.env.VITE_API+e?.img} width={'100%'} height={'100%'}/></SwiperSlide>)
  return (
    <>
      {slider ? (
        <Box sx={{ width: "100%", height: "90vh" }}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay:3000
            }}
            modules={[Pagination,Autoplay]}
            className='SliderSwiper'>
            {items}
          </Swiper>
        </Box>
      ) : (
        <Loading />
      )}
    </>
  );
}
