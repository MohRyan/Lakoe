import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CountdownTimer from "./useCountDown";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { currencyFormatter } from "@/utils/currency";

const FlashSale: React.FC = () => {
  const swiper = useSwiper();
  const targetDate = new Date("2024-06-10T10:59:59");

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "20px",
            height: "40px",
            backgroundColor: "black",
            borderRadius: "5px",
            marginRight: "1%",
          }}
        />
        <Typography sx={{ fontWeight: "bold" }}>Today's</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            gap: "10%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              mt: "1%",
              fontFamily: "Merriweather, serif",
            }}
            variant="h4"
          >
            Flash Sales
          </Typography>
          <CountdownTimer targetDate={targetDate} />
        </Box>
        <Box
          sx={{
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "10%",
          }}
        >
          <FaArrowLeft
            size={30}
            cursor={"pointer"}
            onClick={() => swiper.slidePrev()}
          />
          <FaArrowRight
            size={30}
            cursor={"pointer"}
            onClick={() => swiper.slideNext()}
          />
        </Box>
      </Box>
      <Box sx={{ mt: "2%" }}>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          // onSwiper={swiper}
          loop={true}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: swiper && ".swiper-button-next",
            prevEl: swiper && ".swiper-button-prev",
          }}
          className="mySwiper"
        >
          {product_mocks.map((mock) => (
            <SwiperSlide key={mock.id}>
              <img
                src={mock.image}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "250px",
                  borderRadius: "2px",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  mt: "1%",
                }}
                variant="h6"
              >
                {mock.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  mt: "1%",
                }}
                variant="h6"
              >
                {currencyFormatter(mock.price)}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mx: "auto",
          mt: "5%",
        }}
      >
        <Button
          sx={{
            color: "#DF4444",
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: "15px",
            ":hover": {
              bgcolor: "white",
              color: "#DF4444",
            },
          }}
        >
          View All Producs
        </Button>
      </Box>
    </Box>
  );
};

export default FlashSale;

const product_mocks = [
  {
    id: "1",
    name: "S-Series Comfort Chair",
    price: 120,
    image:
      "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "2",
    name: "IPS LCD Gaming Monitor",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "AK-900 Wired Keyboard",
    price: 960,
    image:
      "https://plus.unsplash.com/premium_photo-1684407617236-c60dc693293a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "4",
    name: "HAVIT HV-G92 Gamepad",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "S-Series Comfort Chair",
    price: 100,
    image:
      "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "6",
    name: "S-Series Comfort Chair",
    price: 890,
    image:
      "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
