import React from "react";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Testimonials/Testimonials.css"
import "swiper/css";
import "swiper/css/effect-cards";

import img1 from "../../Images/t_img1.jpg";
import img2 from "../../Images/t_img2.jpg";
import img3 from"../../Images/t_img3.jpg";


export default function Testimonials() {
  return (
    <>
     <section>
        <div className="container sliders">
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide_item">
            <div className="slide_img_1">
              <img src={img1} alt=""/>
            </div>
            <h4>Name 1</h4>
            <p>dsfgfhjefvdbcnnczvxfyukjvnc cgkdkcxvgkhfc
              cgjgugufvzcxbxnlsdsgfdvzbznklgfdhjssiugvcxz
              ffgyuimnbvfywuikmnbvcdgsuakmngdkmnbcgdja
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
            <div className="slide_img_2">
              <img src={img3} alt=""/>
            </div>
            <h4>Name 2</h4>
            <p>dsfgfhjefvdbcnnczvxfyukjvnc cgkdkcxvgkhfc
              cgjgugufvzcxbxnlsdsgfdvzbznklgfdhjssiugvcxz
              ffgyuimnbvfywuikmnbvcdgsuakmngdkmnbcgdja
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
            <div className="slide_img_3">
              <img src={img2} alt=""/>
            </div>
            <h4>Name 3</h4>
            <p>dsfgfhjefvdbcnnczvxfyukjvnc cgkdkcxvgkhfc
              cgjgugufvzcxbxnlsdsgfdvzbznklgfdhjssiugvcxz
              ffgyuimnbvfywuikmnbvcdgsuakmngdkmnbcgdja
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
     </section>
    </>
  );
}
