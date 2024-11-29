'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TitleSectionProps {
  title?: string;
  description?: string;
}

const TitleSection = ({ title, description }: TitleSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && buttonRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <div className="mt-1 xl:mt-[6rem] max-w-container w-full flex flex-col items-center justify-center gap-6 m-auto">
      <h1
        ref={titleRef}
        className="text-[42px] xl:text-[48px] leading-[56px] text-center  text-secondary-06"
      >
        {title}
      </h1>
      <p
        ref={subtitleRef}
        className="text-[16px] leading-[24px] mb-6 max-w-2xl text-gray text-center"
      >
        {description}
      </p>
    </div>
  );
};

export default TitleSection;
