"use client";
import { Button } from "@/shared/components/Button";
import { TitleSection } from "@/shared/components/TitleSection";
import * as React from "react";
import { hotels } from "../../constants/hotels";
import Link from "next/link";

const TopRating: React.FC = () => {
  return (
    <div className="max-w-7xl container mx-auto px-4">
      <TitleSection
        title=" Explore Our Best List  5–Stars Hotel!"
        description=" We understand that every traveler has different preferences. That's why our platform's good."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-sm">
                  {"★".repeat(hotel.stars)}{" "}
                  <span className="text-gray-400 text-sm">
                    ({hotel.visitors} Visitors)
                  </span>
                </span>
              </div>

              <Button className="mt-4 text-secondary-06" type="bg_transparant">
                <Link href="/search-results">Booking Now</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button className="text-white" type="primary_filled">
          View More
        </Button>
      </div>
    </div>
  );
};

export default TopRating;
