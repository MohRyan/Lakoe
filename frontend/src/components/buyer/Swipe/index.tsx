import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxwcm9kdWN0JTIwZGlzY291bnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwcm9kdWN0JTIwZGlzY291bnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1542992015-4a0b729b1385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxwcm9kdWN0JTIwZGlzY291bnR8ZW58MHx8MHx8fDA%3D",
  },
];
const SwipeableTextMobileStepper: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "60vh", marginTop: "5vh" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ borderRadius: "10px" }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.label}>
            <img
              src={image.imgPath}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "50vh",
                borderRadius: "10px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwipeableTextMobileStepper;
