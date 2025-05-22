"use client";
import helixImage from "@/assets/images/helix2.png";
import emojiStar from "@/assets/images/emojistar.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const CallToAction = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (value) => console.log("Value", value));
  }, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <div
      className="bg-black text-white py-18 sm:py-24  overflow-x-clip"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            className="hidden sm:inline absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>

        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={emojiStar}
            className="hidden sm:inline absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <h2 className="text-5xl font-bold sm:max-w-[672px] mx-auto text-center sm:text-6xl tracking-tighter">
          Get instant access
        </h2>

        <p className="text-xl text-center text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@mail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
