"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../Button";
import gsap from "gsap";
import { GuestSelector } from "@/shared/components/GuestSelector";
import Link from "next/link";

const BookingBar: React.FC = () => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [rooms, setRooms] = useState<number>(0);
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [whereTo, setWhereTo] = useState<string>("");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [progress]);
  useEffect(() => {
    let progressValue = 0;

    if (checkIn) progressValue += 25;
    if (checkOut) progressValue += 25;
    if (whereTo != "") progressValue += 25;
    if (adults > 0 || children > 0 || rooms > 0) progressValue += 25;

    setProgress(progressValue);
  }, [checkIn, checkOut, rooms, adults, children, whereTo]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={ `w-full mx-auto transition-all duration-500 ease-in-out rounded-[5px]  bg-black opacity-99 text-secondary-02 py-4 px-6 flex justify-center`}
    >
      <div className="absolute top-0 left-0 w-full bg-gray-300 h-[2px]  overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-secondary-06"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4  w-full">
        <div className="flex flex-col items-start gap-4">
          <label htmlFor="whereTo" className="text-sm text-primary-11">
            Where to
          </label>
          <input
            id="whereTo"
            value={whereTo}
            onChange={(e) => setWhereTo(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs bg-transparent rounded  border border-secondary-06 focus:border-secondary-06 focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <label htmlFor="checkIn" className="text-sm text-primary-11">
            Check In
          </label>
          <input
            id="checkIn"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="bg-transparent rounded focus:outline-none border border-secondary-06 focus:border-secondary-06 h-[3rem] px-4 py-2"
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <label htmlFor="checkOut" className="text-sm text-primary-11">
            Check Out
          </label>
          <input
            id="checkOut"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="bg-transparent rounded focus:outline-none h-[3rem] px-4 py-2 border border-secondary-06 focus:border-secondary-06"
          />
        </div>
        <div className="flex flex-col gap-4 items-start">
          <label htmlFor="guests" className="text-sm text-primary-11">
            Guests
          </label>
          <div className="flex gap-2">
            <GuestSelector
              rooms={rooms}
              adults={adults}
              children={children}
              setRooms={setRooms}
              setAdults={setAdults}
              setChildren={setChildren}
            />
          </div>
        </div>
        <Link
          href="/search-results
   "
        >
          <Button type="primary_filled">Search</Button>
        </Link>
      </div>
    </div>
  );
};

export default BookingBar;
