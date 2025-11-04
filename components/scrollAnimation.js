// components/ScrollAnimation.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 }, // start hidden and moved down 50px
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // when top of element hits 80% from top of viewport
            toggleActions: "play none none none", // play only once
          },
        }
      );
    });

    // Optional: Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null; // this component only triggers the animation, no UI needed
}
