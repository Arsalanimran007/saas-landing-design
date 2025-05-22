"use client"
import clsx from "clsx";
import React, { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our team pricing is based on the number of users. You can scale up or down anytime based on your needs.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use industry-standard encryption and regular backups to ensure your data is always protected.",
  },
];

// ✅ Accordion item component
const AccordianItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={clsx("transition-transform duration-300", {
            "rotate-45": isOpen,
          })}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
      <AnimatePresence>
      {isOpen && 
      ( <motion.div // className={clsx("mt-4 text-white/70 transition-all duration-300", {
      //   "block": isOpen,
      //   "hidden": !isOpen
      // })}
      
      initial={{
        opacity:0,
        height:0,
        marginTop:0
      }}
      animate={{
        opacity:1,
        height:'auto',
        marginTop:'16px'
      }}
      exit={{
        opacity:0,
        height:0,
        marginTop:0
      }}
      
      >
        <span>{answer}</span>
      </motion.div>
    
    ) }
    </AnimatePresence>
     
    </div>
  );
};

// ✅ Main FAQ component
const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-18 sm:py-24">
      <div className="container">
        <h2 className="text-5xl font-bold sm:max-w-[672px] mx-auto text-center sm:text-6xl tracking-tighter">
          Frequently asked questions
        </h2>

        <div className="mt-12 max-w-[672px] mx-auto">
          {items.map((item, index) => (
            <AccordianItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
