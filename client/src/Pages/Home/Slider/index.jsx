import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeSlider.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Stack, Typography } from "@mui/material";
import fetchData from "../../../Utils/fetchData";
import Loading from "../../../Components/Loading";

export const SliderCart = ({ img, title, categoryTitle }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <img src={img} alt={title} width={"100%"} height={"100%"} />
      <Stack sx={{ position: "absolute", right: "5%", bottom: "40%" }}>
        <Stack direction='row' justifyContent='end'  >
          <Typography
            sx={{
              borderRadius: "10px",
              px: "10px",
              py:'2px',
              color: "white",
              fontWeight: "bolder",
              backdropFilter: "blur(10px)",
              fontSize: "1.3em",
            }}>
            {categoryTitle}
          </Typography>
        </Stack>
        <Stack width={'300px'} sx={{backdropFilter: "blur(10px)",}}>
          <h2 sx={{textAlign:'right'}}>{title}</h2>
        </Stack>
      </Stack>
    </Box>
  );
};
export default function HomeSlider() {
  const [slider, setSlider] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("slider");
      setSlider(res?.sliders);
    })();
  }, []);
  const items = slider?.map((e, index) => (
    <SwiperSlide key={index}>
      <SliderCart
        img={import.meta.env.VITE_API + e?.img}
        title={e?.title}
        categoryTitle={e?.categoryId?.title}
      />
    </SwiperSlide>
  ));
  return (
    <>
      {slider ? (
        <Box sx={{ width: "100%", height: "90vh" }}>
          <Swiper
          
            // autoplay={{
            //   delay: 3000,
            // }}
            modules={[]}
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
