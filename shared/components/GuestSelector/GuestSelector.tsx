"use client";
import React, { useState, useEffect, useRef } from "react";

interface GuestSelectorProps {
  rooms: number;
  adults: number;
  children: number;
  setRooms: React.Dispatch<React.SetStateAction<number>>;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}
const GuestSelector: React.FC<GuestSelectorProps> = ({
  rooms,
  adults,
  children,
  setRooms,
  setAdults,
  setChildren,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative z-40 h-[3rem] px-4 py-2 border border-secondary-06 focus:border-secondary-06 rounded"
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full"
      >
        <span>{`${adults} adults · ${children} children · ${rooms} room${
          rooms > 1 ? "s" : ""
        }`}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute z-50 mt-2 bg-black opacity-90 rounded-lg shadow-lg w-full">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <span className="text-gray-700">Adults</span>
            <div className="flex items-center">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
              >
                -
              </button>
              <span className="mx-4">{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <span className="text-gray-700">Children</span>
            <div className="flex items-center">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
              >
                -
              </button>
              <span className="mx-4">{children}</span>
              <button
                onClick={() => setChildren(children + 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-gray-700">Rooms</span>
            <div className="flex items-center">
              <button
                onClick={() => setRooms(Math.max(1, rooms - 1))}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
              >
                -
              </button>
              <span className="mx-4">{rooms}</span>
              <button
                onClick={() => setRooms(rooms + 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="px-4 py-2 border-t flex justify-center">
            <button
              onClick={toggleDropdown}
              className="w-3/4 py-1 bg-secondary-06 text-white rounded-lg my-2"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestSelector;
