"use client";
import { useEffect, useRef } from "react";
import {
  animateHeaderText,
  animateCircles,
  animateTextInsideCircles,
} from "../../animations/animations";

interface HotelStatsProps {
  name?: string;
}

const HotelStats = ({ name }: HotelStatsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircles(circleRefs);
            animateTextInsideCircles(textRefs);
            animateHeaderText(headerRef);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto flex flex-col lg:flex-row text-secondary-11 py-12 px-6 flex items-center justify-between h-[400px] mb-12"
    >
      <div className="text-start">
        <h2
          ref={headerRef}
          className="w-full xl:w-3/4 text-2xl lg:text-4xl font-semibold"
        >
          Hotels with the best service and quality always
        </h2>
        <div className="w-1/2 h-[1px] rounded bg-secondary-11 bg-opacity-20 my-6"></div>
        <div className="flex justify-start items-center mt-4">
          <div className="flex items-start gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-yellow-400"
              >
                <path d="M12 2.25l2.806 8.636h9.065l-7.334 5.331 2.805 8.636-7.334-5.33-7.334 5.33 2.805-8.636-7.334-5.331h9.065L12 2.25z" />
              </svg>
            ))}
          </div>
          <span className="text-lg ml-2">5.0</span>
        </div>
        <p className="mt-2 text-sm">a five-star hotel</p>
      </div>

      <div className="flex justify-center items-center gap-0 my-6 lg:my-0">
        <div
          ref={(el) => {
            circleRefs.current[0] = el;
            return void 0;
          }}
          className="flex justify-center items-center w-36 h-36 md:w-56 md:h-56 xl:w-64 xl:h-64 border border-secondary-11 border-opacity-60 rounded-full -mr-8"
        >
          <div
            ref={(el) => {
              textRefs.current[0] = el;
              return void 0;
            }}
            className="text-center"
          >
            <p className="text-xl lg:text-4xl font-bold">100+</p>
            <p className="text-[12px] lg:text-sm mt-4">Comfortable <br /> rooms</p>
          </div>
        </div>
        <div
          ref={(el) => {
            circleRefs.current[1] = el;
            return void 0;
          }}
          className="flex justify-center items-center w-36 h-36 md:w-56 md:h-56 xl:w-64 xl:h-64 border border-secondary-11 border-opacity-60 rounded-full -mr-8"
        >
          <div
            ref={(el) => {
              textRefs.current[1] = el;
              return void 0;
            }}
            className="text-center"
          >
            <p className="text-xl lg:text-4xl font-bold">5M+</p>
            <p className="text-[12px] lg:text-sm mt-4">Happy <br/> Customers</p>
          </div>
        </div>
        <div
          ref={(el) => {
            circleRefs.current[2] = el;
            return void 0;
          }}
          className="flex justify-center items-center w-36 h-36 md:w-56 md:h-56 xl:w-64 xl:h-64 border border-secondary-11 border-opacity-60 rounded-full"
        >
          <div
            ref={(el) => {
              textRefs.current[2] = el;
              return void 0;
            }}
            className="text-center"
          >
            <p className="text-xl lg:text-4xl font-bold">23+</p>
            <p className="text-[12px] lg:text-sm mt-4">Certificate of <br/> Merit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelStats;
