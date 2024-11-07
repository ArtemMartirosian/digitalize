"use client";

import { motion } from "framer-motion";

export const Blobs = () => {
  return (
    <div className="absolute inset-1/2 -z-20 aspect-video w-full max-w-screen-lg -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 1, type: "spring" },
        }}
        className="absolute aspect-square size-[450px] -translate-x-1/2 rounded-full bg-pink-500 blur-[50px] dark:bg-orange-300/10"
      ></motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 1, type: "spring" },
        }}
        className=" size-[450px] aspect-square rounded-full dark:bg-emerald-500/30 bg-emerald-500 absolute blur-[100px] animate-blob-two"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 3, duration: 1, type: "spring" },
        }}
        className=" size-[450px] aspect-square rounded-full dark:bg-violet-500/30 bg-violet-500 absolute blur-[100px] animate-blob-three inset-x-1/2 -translate-x-1/2"
      ></motion.div> */}
    </div>
  );
};
