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
            <h4>Jacob: Our Gold Member</h4>
            <p>Using this app has been a game-changer for me! I've always struggled with eating healthy, but with the help of the app's meal plans and nutritional information, I've been able to make better choices and feel great about what I'm putting into my body. I've also been consistently hitting the gym, thanks to the app's workout plans and tracking features.!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
            <div className="slide_img_2">
              <img src={img3} alt=""/>
            </div>
            <h4>Rachel: Our Silver Member</h4>
            <p>As someone who has always been active, I was skeptical about using an app to guide my workouts. But after trying it out, I'm a total convert! The app's personalized workout plans have pushed me to new levels of strength and endurance, and I love being able to track my progress over time. I've seen major improvements in my fitness and overall well-being since starting to use this app!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
            <div className="slide_img_3">
              <img src={img2} alt=""/>
            </div>
            <h4>Dean: Our Platimum Member </h4>
            <p>As someone who has struggled with chronic health issues, I've always been on the lookout for tools and resources to help me stay on track. The app's easy-to-use interface, personalized health tracking has motivated me to prioritize my health. I've seen significant improvements in my health since using this app, and I'm so grateful for the support it provides!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
     </section>
    </>
  );
}
