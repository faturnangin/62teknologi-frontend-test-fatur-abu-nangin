import React from 'react'

export default function SectionTitle({title}: {title:string}) {
  return (
    <div className="w-fit text-grayscale1 rounded-3xl border border-grayscale2 dark:border-grayscale3 bg-blue dark:bg-grayscale4/50 backdrop-blur-2xl text-base font-medium px-[21px] py-2"><span className="animate-ping-slow">✦</span> {title}</div>
  )
}
