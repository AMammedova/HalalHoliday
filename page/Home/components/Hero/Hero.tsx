
"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/shared/components/Button";
import Link from "next/link";
import { BookingBar } from "@/shared/components/BookingBar";

const HeroCarousel = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/hero7.jpg",
    "/images/hero8.jpg",
    "/images/hero9.jpg",
    "/images/hero11.jpg",
  ];

  const handleScroll = () => {
    if (heroRef.current) {
      const offset = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen bg-cover bg-center  transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center  bg-black bg-overlay  opacity-70 ">
        <div className="absolute z-10 inset-0 flex flex-col justify-center items-center text-center text-white" >
        <h1 className="text-5xl font-bold mb-4">
          Halal Holidays for the Muslim traveller
        </h1>
        <p className="mb-6 w-3/4 mx-auto">
          Muslim-friendly hotels: Women-only pools and beaches, a wide range of
          halal hotel options, alcohol-free family hotels, secluded villas, and
          hijab-friendly accommodations available on HalalHolidayCheck.
        </p>
        <Button
          size="regular"
          type="primary_filled"
          className="max-w-[232px] z-20"
        >
          <Link href="/search-results">Booking Online</Link>
        </Button>
        </div>

      </div>
      <div className="hidden md:block max-w-7xl mx-auto absolute z-10 bottom-4 left-0 right-0 text-center">
      <BookingBar/>
      </div>

    </div>
  );
};

export default HeroCarousel;
