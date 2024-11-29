"use client";
import { BookingBar } from "@/shared/components/BookingBar";
import { Card } from "@/shared/components/Card";
import { CheckboxFilter } from "@/page/Search/components/CheckboxFilter";
import React, { useState } from "react";
import { cardData } from "./constants/cardData";

const Search = () => {
  const [priceRange, setPriceRange] = useState(40);
  const [filters, setFilters] = React.useState<any>({});

  const handlePriceChange = (e: any) => {
    setPriceRange(e.target.value);
  };

  const handleFilterChange = (filterName: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div className="mt-28 max-w-6xl 2xl:max-w-7xl mx-auto">
      <BookingBar />
      <h3 className="text-2xl font-bold text-secondar-11 flex my-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        Baku: 29 properties found
      </h3>
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row xl:gap-6">
        <div className="w-full lg:w-1/4 p-4 bg-white rounded-lg ">
          <h4 className="text-xl font-semibold text-secondary-11 mb-4">
            Filters
          </h4>
          <div className="mb-4">
            <label className="block text-sm text-secondary-11 mb-2">
              Property Type
            </label>
            <select className="select select-secondary font-poppins w-full h-12 border border-secondary-06 focus:outline-none">
              <option>Hotel</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-secondary-11 mb-2">
              Price Range
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-secondary-11">
                ${priceRange} - $100
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange}
              onChange={handlePriceChange}
              className="range range-secondary w-full"
            />
          </div>
          <CheckboxFilter
            title="Popular Filters"
            filterOptions={[
              { label: "Breakfast included", key: "breakfastIncluded" },
              { label: "Baku Old Town", key: "oldTown" },
              { label: "Hotel", key: "hotel" },
              { label: "Pool", key: "pool" },
              { label: "Reserve now, pay later", key: "reserveLater" },
            ]}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
          <CheckboxFilter
            title="Reservation Policy"
            filterOptions={[
              { label: "Free cancellation", key: "freeCancellation" },
              {
                label: "Book without credit card",
                key: "bookWithoutCreditCard",
              },
              { label: "No prepayment", key: "noPrepayment" },
            ]}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
          <CheckboxFilter
            title="Property rating"
            filterOptions={[
              { label: "3 stars", key: "3stars" },
              {
                label: "4 stars",
                key: "4stars",
              },
              { label: "5 stars", key: "5stars" },
            ]}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>

        <div className="w-full lg:w-3/4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center flex-col lg:flex-row gap-4 justify-between mb-6">
            <div className="w-full relative text-secondary-11">
              <input
                className="border-secondary-06 border bg-white px-5 py-4 pl-16 rounded text-sm focus:outline-none"
                style={{ borderColor: "#B18A35" }}
                type="search"
                name="search"
                placeholder="Search by property name"
              />
              <button type="submit" className="absolute left-0 top-0 mt-4 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#B18A35"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
            <select className="select select-secondary h-[3.6rem]  text-secondary-11 rounded font-poppins border border-secondary-06 w-full w-full lg:max-w-xs focus:outline-none focus:shadow-outline focus:border-secondary-06">
              <option disabled selected>
                Recommended
              </option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
              <option>Distance from downtown</option>
              <option>Guest rating + our picks</option>
              <option>Star rating</option>
            </select>
          </div>

          <div className=" flex flex-col gap-4">
            <Card
              id={cardData.id}
              title={cardData.title}
              location={cardData.location}
              rating={cardData.rating}
              description={cardData.description}
              imageUrl={cardData.imageUrl}
            />
            <Card
              id={cardData.id}
              title={cardData.title}
              location={cardData.location}
              rating={cardData.rating}
              description={cardData.description}
              imageUrl={cardData.imageUrl}
            />
            <Card
              id={cardData.id}
              title={cardData.title}
              location={cardData.location}
              rating={cardData.rating}
              description={cardData.description}
              imageUrl={cardData.imageUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
