"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import SectionTitle from './SectionTitle'
import { Globe2 } from 'lucide-react'

export default function SearchSection() {
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch(`${process.env.BASEURL}/api/credentials`)
      .then((response) => response.json())
      .then((data) => setToken(data.token))
      .catch((error) => console.error('Error fetching token:', error));
  }, []);

  const [param, setParam] = useState('');
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      console.log(token)
      console.log(param)
      console.log(value)
      console.log(`https://api.yelp.com/v3/businesses/search?${param}=${value}&limit=3`)
      const res = await fetch(`https://api.yelp.com/v3/businesses/search?${param}=${value}&limit=3`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Client-ID': 'DSj6I8qbyHf-Zm2fGExuug',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section id='main' className='bg-blue dark:bg-deepblue relative'>
    <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-grayscale1/0 via-grayscale2 dark:via-[#666F7A] to-grayscale1/0"/>
    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-grayscale1/0 via-grayscale2 dark:via-[#666F7A] to-grayscale1/0"/>
      <div className='container mx-auto'>
        <div className='-translate-y-1/2'>
          <div className='mx-1 md:mx-12 lg:mx-20 p-2 lg:p-5 bg-grayscale1 dark:bg-darkestblue rounded-lg border border-grayscale2 shadow-md flex items-center justify-center'>
          <form onSubmit={handleSubmit} className='flex flex-wrap items-center justify-center gap-x-5 gap-y-5'>
              <label htmlFor="params">Search By:</label>
              <select name="" id="params" value={param} onChange={(e)=>setParam(e.target.value)} className='border p-2 rounded-lg'>
                  {['name','location','latitude','longitude','term','radius','categories','locale','price','open_at','attributes','sort_by'].map((param:string,index)=>
                  <option key={index}>{param}</option>
                  )}
              </select>
              <label className='text-deepblue dark:text-grayscale1' htmlFor="value">Search Input:</label>
              <input className='p-2 border rounded-lg' type="text" id="value" value={value} onChange={(e)=>setValue(e.target.value)}  placeholder='insert your keyword'/>
              <button type='submit' className='flex space-x-1 items-center justify-center p-2 text-sm text-grayscale1 font-medium rounded-xl bg-blue'>
                    <Globe2/>
                    <span>Start Discovery</span>
              </button>
          </form>   
          </div>
        </div>
        {searchResults && (
        <div className="px-1 md:px-12 lg:px-20 pb-20 space-y-10">
          <div className='w-full flex flex-col items-center justify-center'>
          <SectionTitle title='Business by your search'/>
          </div>
        </div>)
        }
      </div>
    </section>
  )
}
