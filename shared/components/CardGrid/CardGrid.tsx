
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Card {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  rating?: number;
  services?: {
    title: string;
    description: string;
    features: string[];
  };
}

gsap.registerPlugin(ScrollTrigger);

const CardGrid: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Hotel Reservation",
      description: "Discover selected Islamic-friendly hotels.",
      features: ["Separate pools for women", "Alcohol-free family packages"],
      image: "/images/offers1.jpg",
    },
    {
      id: 2,
      title: "Airport Transfers",
      description: "Comfortable and reliable transfer services.",
      features: ["VIP transfers", "Spacious vehicles for families"],
      image: "/images/offers2.jpg",
    },
    {
      id: 3,
      title: "Special Offers",
      description: "Don't miss out on our seasonal and special offers.",
      features: ["Discount packages", "Select luxury villas"],
      image: "/images/offers3.jpg",
    },
  ];
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3, ease: "power1.out" } });
      tl.to(card, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" });

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <div className="w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          ref={addToRefs}
          className="lg:col-span-2 bg-cover bg-center rounded-lg shadow-lg relative cursor-pointer"
          style={{
            backgroundImage: `url(${cards[0].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center text-start text-white p-4">
            <h3 className="text-4xl font-semibold mb-4">{cards[0].title}</h3>
            <p className="text-xl mb-4">{cards[0].description}</p>
            <div className="mt-2 text-sm flex flex-wrap flex-col gap-2">
              {cards[0].features.map((feature, i) => (
                <span className="text-[16px]" key={i}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {cards.slice(1).map((card) => (
            <div
              key={card.id}
              ref={addToRefs}
              className="bg-cover bg-center rounded-lg shadow-lg relative h-[200px] md:h-[300px] cursor-pointer"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center text-start text-white p-4">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-md mb-2">{card.description}</p>
                <div className="mt-2 text-sm flex flex-wrap flex-col gap-1">
                  {card.features.map((feature, i) => (
                    <span className="text-[14px]" key={i}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
