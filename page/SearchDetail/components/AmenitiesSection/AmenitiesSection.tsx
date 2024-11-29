'use client';
import React, { useState } from "react";
import {
  FaTv,
  FaWifi,
  FaCheckCircle,
  FaTshirt,
  FaSnowflake,
  FaWater,
  FaCar,
  FaFirstAid,
} from "react-icons/fa";

const AmenitiesSection = () => {
  const amenities = [
    { icon: <FaTv />, label: "TV" },
    { icon: <FaWifi />, label: "WiFi" },
    { icon: <FaCheckCircle />, label: "Essentials" },
    { icon: <FaTshirt />, label: "Hangers" },
    { icon: <FaSnowflake />, label: "Air conditioning" },
    { icon: <FaWater />, label: "Hot water" },
    { icon: <FaCar />, label: "Free parking" },
    { icon: <FaFirstAid />, label: "First aid kit" },
  ];


  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-secondary-11 mb-6">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities.slice(0, showAll ? amenities.length : 6).map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="text-gray-700 text-xl">{item.icon}</div>
            <p className="text-gray-900">{item.label}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 text-secondary-06 border border-secondary-06 rounded-lg px-4 py-2 hover:bg-secondary-06 hover:text-white transition"
        >
          Show all {amenities.length} amenities
        </button>
      )}
    </div>
  );
};

export default AmenitiesSection;
