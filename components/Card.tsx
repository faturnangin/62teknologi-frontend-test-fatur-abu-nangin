import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Category,
  Business,
  BusinessesResponse,
  Coordinates,
  Location,
} from "@/types/Businesses";

import { Github,ArrowUpRight, StarIcon, MessageSquare } from "lucide-react";
export default function Card({ data }: { data: Business }) {
  
  return (
    <div className="p-5 space-y-5 rounded-xl border border-grayscale2 dark:border-grayscale3 bg-grayscale1 hover:bg-blue dark:bg-grayscale4/50 group transition-colors duration-300">
      <div className="h-[320px] w-[320px] overflow-clip rounded-lg">
        <img className="hover:scale-105 tranition duration-300 w-full h-full object-cover" src={data.image_url} alt="" />
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-[10px]">
          <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-grayscale1 group-hover:text-grayscale1">
            {data.name}
          </h5>
          <div className="flex space-x-[10px]">
          
          </div>
          <p className="text-sm text-grayscale3 group-hover:text-grayscale1 dark:text-grayscale22 lg:text-base font-medium w-full max-w-[350px] text-justify">
            Description
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-5">
            <button className="p-4 lg:px-[21px] lg:py-[13px] bg-grayscale1 dark:bg-darkestblue rounded-xl flex justify-center items-center border border-grayscale32">
              <StarIcon/>
            </button>
            <button className="p-4 lg:px-[21px] lg:py-[13px] bg-grayscale1 dark:bg-darkestblue rounded-xl flex justify-center items-center border border-grayscale32">
              <MessageSquare/>
            </button>
          </div>
          <button className="p-4 lg:px-[21px] lg:py-[13px] bg-grayscale1 dark:bg-darkestblue rounded-xl flex justify-center items-center border border-grayscale32">
            <Link href="https://uxmeter.vercel.app/" target="_blank">
              <ArrowUpRight/>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
