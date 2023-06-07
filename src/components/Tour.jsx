import React, { useEffect, useState } from "react";
// import touraxios from "../enviroment/config/axiosinstance";
import cairo from "./image/city/cairo.jpg";
import luxor from "./image/city/luxor.jpg";
import aswan from "./image/city/aswan.jpg";
import alex from "./image/city/alexander-schimmeck-uzM1XBFqa60-unsplash.jpg";
import alex2 from "./image/city/alexandria.jpg";
import pexels from "./image/city/pexels-rachel-claire-4577718.jpg";
import simon from "./image/city/simon-berger-boyXZfqpwpU-unsplash.jpg";
import siwa from "./image/city/siwa.jpg";
import template from "./image/city/temple.jpg";
import "./Tour.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const swipers = [
  {
    title: "Cairo",
    desc: ` Situated by the Nile, Egypt’s capital Cairo holds some of the
              country’s best historical and contemporary offerings, lively
              streets that never sleep, and diverse neighborhoods.`,
    img: cairo,
  },
  {
    title: "Aswan",
    desc: `  Luxor is known as the world's greatest open-air museum. From the
              magnificent sunset views at the majestic temple complexes of
              Karnak and Luxor to the exciting and fun Nile cruises.`,
    img: aswan,
  },
  {
    title: "luxor",
    desc: `  Hurghada is a luxury resort town divided by Sigala, ElDahar and
              El-Memsha. Spanning over 40 km of pristine coastline, Hurghada
              City has year-round sunshine, incredibly beautiful coral reefs.`,
    img: luxor,
  },
  {
    title: "Dahab",
    desc: `  Of all the Red Sea destinations, Dahab is the most appealing for
              those who want to soak up some sun in pristine beaches, relax in
              laid back atmosphere and try local restaurants`,
    img: alex,
  },
  {
    title: "Siwa",
    desc: `   After a long drive through the barren landscape of the Western
              Desert, you won’t believe your eyes when you reach Siwa for the
              first time. See an edenic island full of mineral springs, salt
              lakes`,
    img: siwa,
  },
  {
    title: "Sharm Elsheikh",
    desc: ` With sunshine and warm waters all year round, Sharm El Sheikh is
              the closest destination to Europe where you can soak up sun, dive
              amazing corals reefs, and enjoy the sea any time
      `,
    img: simon,
  },
  {
    title: "Fayoum",
    desc: `  Fayoum is one of the oldest cities in Egypt, dating back to around
              3200 BC. The city is famous for its natural landscape,
              encompassing sand dunes, palm trees, lakes, and valleys.
            `,
    img: pexels,
  },
  {
    title: "alexandria",
    desc: `   Egypt’s second-largest city. Alexandria remained the capital of
              Egypt for nearly a thousand years and was immensely prosperous
              because of its strategic trading location between the
              Mediterranean and the Red Sea.
           `,
    img: alex2,
  },
  {
    title: "Taba",
    desc: `  Located on a beautiful stretch of the Sinai coastline around 20 km
              south of Taba city and nestled between the Red Sea and Sinai
              desert, Taba Heights is a year round charming seaside resort
         `,
    img: template,
  },
];

const Tour = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="Container tour-container" id="tour">
      <h3 className="special-heading">Tour</h3>

      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={40}
        centeredSlides={true}
        slidesPerView={width > 1200 ? 2.3 : width > 1025 ? 1.7 : 1}
        modules={[Pagination]}
        watchOverflow={true}
        className="mySwiper"
      >
        {swipers.map((swiper) => {
          return (
            <SwiperSlide className="d-flex flex-column">
              <div className="name text-center"></div>
              <div className="d-flex align-items-center">
                <div className="person">
                  <img src={swiper.img} alt="" />
                </div>
              </div>
              <h2 className="fs-3">
                <span className="fs-3">{swiper.title}</span>
              </h2>
              <p className="text-center feedback">{swiper.desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Tour;
