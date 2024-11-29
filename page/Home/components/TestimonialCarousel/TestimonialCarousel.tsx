"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../../constants/testimonials";

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="bg-secondary-11 text-white py-12 my-16">
      <div className="max-w-7xl container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-12">
          Let’s Hear How Their Experiences <br /> Use Our Platform
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#211b0d] rounded-lg shadow-lg p-6 transition-all duration-300 transform scale-90  swiper-slide-active:scale-105 swiper-slide-active:opacity-100">
                <p className="italic mb-4">{`"${testimonial.feedback}"`}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.country}</p>
                  </div>
                </div>
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.hotelName}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-lg font-bold">{testimonial.hotelName}</h4>
                  <p className="text-gray-400">{testimonial.location}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">
                      {"★".repeat(testimonial.stars)}
                    </span>
                    <span className="text-gray-400 ml-2 text-sm">
                      ({testimonial.visitors} Visitors)
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
