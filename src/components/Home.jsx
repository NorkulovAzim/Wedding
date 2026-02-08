import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; // ← add EffectFade

import ToyImg from "../assets/toy1.jpg";
import ToyImg2 from "../assets/toy2.jpg";
import ToyImg3 from "../assets/toy3.jpg";

import "swiper/css";
import "swiper/css/effect-fade";

export default function TestSwiper() {
  return (
    <div className="img-container" style={{ height: "500px" }}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1200}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        style={{ height: "100%" }}
      >
        <SwiperSlide>
          <img
            src={ToyImg}
            alt="Toy 1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ToyImg3}
            alt="Toy 3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ToyImg2}
            alt="Toy 2" // ← fixed alt text (was "Toy 1")
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
