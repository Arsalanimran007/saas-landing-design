import React from "react";
import Feature from "./Feature";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];
const Features = () => {
  return (
    <div className="bg-black text-white py-18 sm:py-24">
      <div className="container">
        <h2 className="text-5xl text-center font-bold tracking-tighter sm:text-6xl">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-xl text-center text-white/70 mt-5">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature, index) => {
            return (
             <Feature key={index} feature={feature} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
