"use client";
import { motion } from "framer-motion";
import PrimaryButton from "./primary-button";
import Star1 from "@/components/icons/star-1";
import Star2 from "@/components/icons/star-2";
import Star3 from "@/components/icons/star-3";
import Search from "@/components/icons/search-icon";

const AnimatedButton = () => {
  return (
    <motion.div className="inline-block ">
      <div className="group relative">
        {/* Decorative Stars */}
        <div className="flex justify-around w-full -z-20 transition-all duration-300 absolute ">
          <span className="pointer-events-none transition-transform duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] rotate-45 group-hover:-rotate-14  group-hover:-translate-y-8 delay-[0ms]">
            <Star1 className="w-[28px] h-[28px] text-[#F8C600]" />
          </span>
          <span className="pointer-events-none transition-transform duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] rotate-45 group-hover:rotate-8  group-hover:-translate-y-12 delay-[0ms]">
            <Star2 className="w-[35px] h-[35px] text-[#F8C600]" />
          </span>
          <span className="pointer-events-none transition-transform duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] rotate-45 group-hover:-rotate-5  group-hover:-translate-y-8 delay-[0ms]">
            <Star3 className="w-[18px] h-[18px] text-[#F8C600]" />
          </span>
        </div>
        {/* Content */}
        <PrimaryButton className="group relative overflow-visible bg-gradient-to-r from-[#FD6700] to-[#FF944B] text-white rounded-[100px] px-5 py-3 flex items-center gap-2 shadow-md hover:shadow-lg">
          <Search className="size-5" />
          <p className="text-2xl font-semibold">Tanya AI</p>
        </PrimaryButton>
      </div>
    </motion.div>
  );
};

export default AnimatedButton;
