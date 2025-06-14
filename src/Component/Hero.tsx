import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" fred min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Eze Favour 👋
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a full-stack dev, smart contract builder, web3 lover & future crypto mogul. This is my digital lab. 
      </motion.p>

      <motion.a
        href="#projects"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
