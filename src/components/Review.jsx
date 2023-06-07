import React from "react";
import Alex from "./image/reviews/alexander-schimmeck-uzM1XBFqa60-unsplash.jpg";
import photo from "./image/reviews/farah-samy-29Y5RyH16Ws-unsplash.jpg";
import simon from "./image/reviews/simon-berger-boyXZfqpwpU-unsplash.jpg";
import { Box, Rating, Typography } from "@mui/material";
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Review = () => {
  // if you use api use the setstate
  // const [value, setValue] = React.useState(2);
  return (
    <div className="Container" id="reviews">
      <h3 className="special-heading">Reviews</h3>
      <div className="text-center ">
        <p className="fs-5">
          We always ask our clients to leave honest reviews,
          <br />
          on the basis of which you can make a choice
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* start SwiperSlide */}
        <SwiperSlide className="d-flex flex-column">
          <div className="name text-center">
            <h2>Ayman Mousa</h2>
            <h2 className="fs-3">
              Tour: <span className="fs-3">Cairo</span>
            </h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="person">
              <img src={simon} alt="" />
            </div>
            {/* start rating */}
            <Box>
              <div className="rating stars">
                <Typography component="legend" className="typography">
                  Service
                </Typography>
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Tours
                </Typography>
                <Rating name="read-only" value={1} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Flight
                </Typography>
                <Rating name="read-only" value={2} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Bus
                </Typography>
                <Rating name="read-only" value={2} readOnly />
              </div>
            </Box>
            {/* end rating */}
          </div>
          <p className="text-center feedback">
            Service is very good. We have best memories. I recommend this site.
            Siwa is so beautiful with its lake we have a lot of good time. I
            will never forget this tour and I will reapeat it again
          </p>
        </SwiperSlide>
        {/* end SwiperSlide */}

        {/* start SwiperSlide */}
        <SwiperSlide className="d-flex flex-column">
          <div className="name text-center">
            <h2>Rahma Ibrahim</h2>
            <h2 className="fs-3">
              Tour: <span className="fs-3">Siwa</span>
            </h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="person">
              <img src={Alex} alt="" />
            </div>
            {/* start rating */}
            <Box>
              <div className="rating stars">
                <Typography component="legend" className="typography">
                  Service
                </Typography>
                <Rating name="read-only" value={2} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Tours
                </Typography>
                <Rating name="read-only" value={1} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Flight
                </Typography>
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Bus
                </Typography>
                <Rating name="read-only" value={3} readOnly />
              </div>
            </Box>
            {/* end rating */}
          </div>
          <p className="text-center feedback">
            Service is very good. We have best memories. I recommend this site.
            Siwa is so beautiful with its lake we have a lot of good time. I
            will never forget this tour and I will reapeat it again
          </p>
        </SwiperSlide>
        {/* end SwiperSlide */}

        {/* start SwiperSlide */}
        <SwiperSlide className="d-flex flex-column">
          <div className="name text-center">
            <h2>Ali Hassan</h2>
            <h2 className="fs-3">
              Tour: <span className="fs-3">Alexandria</span>
            </h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="person">
              <img src={photo} alt="" />
            </div>
            {/* start rating */}
            <Box>
              <div className="rating stars">
                <Typography component="legend" className="typography">
                  Service
                </Typography>
                <Rating name="read-only" value={3} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Tours
                </Typography>
                <Rating name="read-only" value={2} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Flight
                </Typography>
                <Rating name="read-only" value={1} readOnly />
              </div>
              <div className="rating">
                <Typography component="legend" className="typography">
                  Bus
                </Typography>
                <Rating name="read-only" value={4} readOnly />
              </div>
            </Box>
            {/* end rating */}
          </div>
          <p className="text-center feedback">
            Service is very good. We have best memories. I recommend this site.
            Siwa is so beautiful with its lake we have a lot of good time. I
            will never forget this tour and I will reapeat it again
          </p>
        </SwiperSlide>
        {/* end SwiperSlide */}
      </Swiper>
    </div>
  );
};

export default Review;
