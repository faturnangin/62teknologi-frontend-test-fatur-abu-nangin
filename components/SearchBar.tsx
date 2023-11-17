// async function getData(query:string) {
//     const token = process.env.API_TOKEN;
//     console.log(token);
//     const res = await fetch(`https://api.yelp.com/v3/businesses/search?location=${query}&limit=3`, {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//     });
//     if (!res.ok) {
//       throw new Error('Data Not Found / Query Not Inserted');
//     }
//     return res.json();
// }
import { Globe2 } from 'lucide-react'
import React from 'react'

interface Businesses {
    id: number;
    name: string;
    location?: string;
    latitude?: number;
    longitude?: number;
    term?: string;
    radius?: number;
    categories?: string;
    locale?: string;
    price?: string;
    open_now?: boolean;
    open_at?: number;
    attributes?: string;
    sort_by?: string;
}
export default function SearchBar() {
  const handleSubmit = async (e:any) => {
    e.preventDefault();
  }
  return (
    <div className='mx-1 md:mx-12 lg:mx-20 p-2 lg:p-5 bg-grayscale1 dark:bg-darkestblue rounded-lg border border-grayscale2 shadow-md flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-wrap items-center justify-center gap-x-5 gap-y-5'>
            <label htmlFor="params">Search By:</label>
            <select name="" id="params" className='border p-2 rounded-lg'>
                {['name','location','latitude','longitude','term','radius','categories','locale','price','open_now','open_at','attributes','sort_by'].map((param:string,index)=>
                <option key={index}>{param}</option>
                )}
            </select>
            <label className='text-deepblue dark:text-grayscale1' htmlFor="value">Search Input:</label>
            <input className='p-2 border rounded-lg' type="text" id="value" placeholder='insert your keyword'/>
            <button type='submit' className='flex space-x-1 items-center justify-center p-2 text-sm text-grayscale1 font-medium rounded-xl bg-blue'>
                  <Globe2/>
                  <span>Start Discovery</span>
            </button>
        </form>   
    </div>
  )
}

