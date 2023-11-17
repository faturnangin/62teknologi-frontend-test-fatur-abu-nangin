import React from 'react'
import Link from 'next/link'
export default function Card() {
  return (
    <div className="p-5 space-y-5 rounded-lg border border-grayscale2 dark:border-grayscale3 bg-grayscale1 dark:bg-grayscale4/50 transition-colors duration-300">
              <img className='w-full max-w-[350px]' src="/img/uxmeter.png" alt="" />
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-[10px]">
                  <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-grayscale1">Central Perks</h5>
                  <div className="flex space-x-[10px]">
                  <img className="h-8" src="/img/figma.svg" alt="" />
                  <img className="h-8" src="/img/react.svg" alt="" />
                  <img className="h-8" src="/img/nextjs.svg" alt="" />
                  <img className="h-8" src="/img/ts.svg" alt="" />
                  <img className="h-8" src="/img/tailwindcss.svg" alt="" />
                  </div>
                  <p className="text-sm text-grayscale3 dark:text-grayscale22 lg:text-base font-medium w-full max-w-[350px] text-justify">Popular coffee shop based on NBC Show Friends in NYC</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-5">
                    <button className="p-4 lg:px-[21px] lg:py-[13px] bg-grayscale1 dark:bg-darkestblue rounded-xl flex justify-center items-center border border-grayscale32"><img className="h-6 invert dark:invert-0" src="/img/figma-outline.svg" alt="" /></button>
                    <button className="p-4 lg:px-[21px] lg:py-[13px] bg-grayscale1 dark:bg-darkestblue rounded-xl flex justify-center items-center border border-grayscale32"><img className="h-6 invert dark:invert-0" src="/img/github.svg" alt="" /></button>
                  </div>
                  <button className="p-4 lg:px-[21px] lg:py-[13px] bg-grayscale1 dark:bg-darkestblue rounded-xl flex justify-center items-center border border-grayscale32"><Link href="https://uxmeter.vercel.app/" target="_blank"><img className="h-6 invert dark:invert-0" src="/img/arrowout.svg" alt="" /></Link></button>
                </div>
              </div>
            </div>
  )
}
