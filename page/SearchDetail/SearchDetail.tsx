"use client";
import React from "react";
import { TitleSection } from "./components/TitleSection";
import { ImageGallery } from "./components/ImageGallery";
import { images, modalImages } from "./constants/gallery";
import { OverviewSection } from "./components/OverviewSection";
import { DescriptionSection } from "./components/DescriptionSection";
import { SleepingArrangements } from "./components/SleepingArrangements";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { PoliciesSection } from "./components/PoliciesSection";
import { MapSection } from "./components/MapSection";

const SearchDetail = () => {
  return (
    <div className="mt-28 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl mx-auto">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/search-results">Search</a>
          </li>
          <li>Apple Country Resorts</li>
        </ul>
      </div>
      <TitleSection
        title="Apple Country Resorts - A Vegetarian Place"
        rating={4.9}
        reviews={1283}
        location="Log Huts Area, Manali, Himachal Pradesh, 175131"
      />
      <ImageGallery images={images} modalImages={modalImages} />
      <OverviewSection />
      <DescriptionSection />
      <SleepingArrangements />
      <AmenitiesSection />
      <PoliciesSection />
      <MapSection />
    </div>
  );
};

export default SearchDetail;
