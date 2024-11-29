"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "../Button";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 px-10 py-5 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg text-secondary-06" : "bg-transparent text-secondary-06"
      }`}
      ref={headerRef}
    >
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-secondary-06 cursor-pointer"
        >
          HalalHoliday
        </Link>

        <button
          className="lg:hidden text-secondary-06 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`absolute lg:static top-16 right-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none lg:flex lg:space-x-8 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col xl:gap-4 lg:flex-row space-y-4 lg:space-y-0 p-5 lg:p-0">
            {["Home", "About", "Rooms", "Contact"].map((text, index) => (
              <a
                key={index}
                href={`#${text.toLowerCase()}`}
                className="relative font-normal transition-all duration-300 hover:text-secondary-06"
              >
                {text}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <Button
          size="regular"
          type="bg_transparant"
          className="max-w-[232px] bg-transparent z-20 hidden lg:block"
        >
          <Link href="/search-results">Booking Online</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
