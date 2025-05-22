"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "@/assets/images/app-screen.png";
import { useRef } from "react";

const ProductShowCase = () => {
  const appImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  return (
    <div className=" text-white py-18 bg-gradient-to-b from-black to-[#5D2CA8] ">
      <div className="container">
        <h2 className="text-5xl text-center font-bold sm:text-6xl tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{ opacity, rotateX, transformPerspective: "800px" }}
          ref={appImage}
        >
          <Image
            src={appScreen}
            alt="the product screenshot"
            className="mt-14 mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowCase;
