import React, { useEffect, useRef, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { Box } from "@mui/material";
import Loading from "../../../Components/Loading";

export default function VideoBanner() {
  const [videoBanner, setVideoBanner] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef();
  const { current } = videoRef;
  useEffect(() => {
    (async () => {
      const res = await fetchData("slider");
      setVideoBanner(res.sliders[0]);
    })();
  }, []);
  const handleClick = () => {
    if (!isPlay) {
      setIsPlay(!isPlay);
      current.play();
    } else {
      setIsPlay(!isPlay);
      current.pause();
    }
  };
  return (
    <>
      {videoBanner ? (
        <Box sx={{ width: "100%", height: "85vh" }}>
          <video
            ref={videoRef}
            onClick={handleClick}
            autoPlay
            loop
            src={import.meta.env.VITE_API + videoBanner?.video}
            type='video/mp4'
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        </Box>
      ) : (
        <Loading />
      )}
    </>
  );
}
