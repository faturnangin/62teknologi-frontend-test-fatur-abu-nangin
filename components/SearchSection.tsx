import React from 'react'
import Search from './SearchBar'
import SectionTitle from './SectionTitle'
import Card from './Card'
export default function SearchSection() {
  return (
    <section id='main' className='bg-blue dark:bg-deepblue relative'>
    <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-grayscale1/0 via-grayscale2 dark:via-[#666F7A] to-grayscale1/0"/>
    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-grayscale1/0 via-grayscale2 dark:via-[#666F7A] to-grayscale1/0"/>
      <div className='container mx-auto'>
        <div className='-translate-y-1/2'>
        <Search/>
        </div>
        <div className="px-1 md:px-12 lg:px-20 pb-20 space-y-10">
          <div className='w-full flex flex-col items-center justify-center'>
          <SectionTitle title='Business by your search'/>
          </div>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            
          </div>
      </div>
      </div>
    </section>
  )
}
