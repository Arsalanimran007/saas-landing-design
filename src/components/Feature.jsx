"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Feature = ({ feature, index }) => {
  const border = useRef(null);
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px,black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e) => {
      // e.x
      // e.y
      const borderRect = border.current.getBoundingClientRect();
      offSetX.set(e.x - borderRect.x);
      offSetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div
      key={index}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
        ref={border}
      />

      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7672 3.11412C17.7538 2.88477 17.6566 2.66832 17.4942 2.50586C17.3317 2.34341 17.1153 2.24627 16.8859 2.23287C13.7922 2.05084 11.0586 2.41568 8.76093 3.31647C6.56249 4.17818 4.86796 5.51412 3.85858 7.17975C2.48202 9.45397 2.4789 12.2149 3.82343 14.8508L2.46171 16.2126C2.3745 16.2998 2.30533 16.4033 2.25813 16.5172C2.21094 16.6312 2.18665 16.7533 2.18665 16.8766C2.18665 16.9999 2.21094 17.1221 2.25813 17.236C2.30533 17.3499 2.3745 17.4535 2.46171 17.5407C2.63783 17.7168 2.8767 17.8157 3.12577 17.8157C3.2491 17.8157 3.37122 17.7915 3.48516 17.7443C3.5991 17.6971 3.70263 17.6279 3.78983 17.5407L5.15155 16.179C6.45937 16.8462 7.79843 17.1829 9.09296 17.1829C10.4082 17.187 11.699 16.8274 12.8226 16.1438C14.4883 15.1344 15.8242 13.4391 16.6859 11.2415C17.5844 8.94225 17.9492 6.20787 17.7672 3.11412ZM11.8484 14.5376C10.2789 15.4883 8.43749 15.5602 6.5578 14.7657L13.1625 8.161C13.2497 8.07379 13.3189 7.97026 13.3661 7.85632C13.4133 7.74238 13.4376 7.62026 13.4376 7.49693C13.4376 7.37361 13.4133 7.25149 13.3661 7.13755C13.3189 7.02361 13.2497 6.92008 13.1625 6.83287C13.0753 6.74567 12.9718 6.67649 12.8578 6.62929C12.7439 6.5821 12.6218 6.55781 12.4984 6.55781C12.3751 6.55781 12.253 6.5821 12.139 6.62929C12.0251 6.67649 11.9216 6.74567 11.8344 6.83287L5.23437 13.4422C4.44218 11.5672 4.51405 9.72115 5.46874 8.15162C7.10233 5.45396 10.9797 3.95475 15.9375 4.06959C16.0453 9.02584 14.5461 12.904 11.8484 14.5376Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <h3 className="mt-6 font-bold">{feature.title}</h3>
      <p className="mt-2 text-white/70">{feature.description}</p>
    </div>
  );
};

export default Feature;
