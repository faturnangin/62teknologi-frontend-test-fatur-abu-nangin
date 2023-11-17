import React from 'react'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
export default function Footer() {
  return (
    <section className='relative' id="footer">
    
      <div className="container mx-auto">
        <div className="px-1 md:px-12 lg:px-20 py-10 flex flex-wrap gap-y-5 justify-between items-center">
          <div className="flex items-center">
            <div className='font-bold'>Business Finder 2023</div>
          </div>
          <div className="flex space-x-5">
            <Link href='https://github.com/faturnangin/' prefetch={false}><button className="w-10 h-10 flex justify-center items-center bg-grayscale2 dark:bg-grayscale4 rounded-xl"><Github/></button></Link>
            <Link href='https://www.linkedin.com/in/nangin/' prefetch={false}><button className="w-10 h-10 flex justify-center items-center bg-grayscale2 dark:bg-grayscale4 rounded-xl"><Linkedin/></button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
