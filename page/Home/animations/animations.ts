import { gsap } from "gsap";

export const animateHeaderText = (headerRef: React.RefObject<HTMLElement>) => {
  if (headerRef.current) {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }
};

export const animateCircles = (circleRefs: React.RefObject<Array<HTMLDivElement | null>>) => {
  gsap.fromTo(
    circleRefs.current,
    { opacity: 0, scale: 0.5, y: 50 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3,
    }
  );
};

export const animateTextInsideCircles = (textRefs: React.RefObject<Array<HTMLDivElement | null>>) => {
  gsap.fromTo(
    textRefs.current,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.5,
    }
  );
};
