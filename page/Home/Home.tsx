import * as React from "react";
import { Hero } from "./components/Hero";
import { BookingBar } from "@/shared/components/BookingBar";
import { Offers } from "./components/Offers";
import { TopRating } from "./components/TopRating";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { HotelStats } from "./components/HotelStats";

interface HomeProps {
  name?: string;
}

const HomePage = ({ name }: HomeProps) => {
  return (
    <div>
      <Hero />
      <Offers />
      <TopRating />
      <TestimonialCarousel />
      <HotelStats />
    </div>
  );
};

export default HomePage;
