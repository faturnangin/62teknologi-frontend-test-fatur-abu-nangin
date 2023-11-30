import React from 'react'
import SectionTitle from './SectionTitle';
import Card from './Card';
import {
    Category,
    Business,
    BusinessesResponse,
    Coordinates,
    Location,
  } from "@/types/Businesses";
  

type InputValue = string | number;
interface Data {
    location: string;
    searchby: string;
    keyword: InputValue;
}

export default async function SearchResult({data}:{data:Data}) {
    // let apiUrl = `https://api.yelp.com/v3/businesses/search?location=${data.location}`;
    // if (data.searchby !== '' && data.keyword !== '') {
    //   apiUrl += `&${data.searchby}=${data.keyword}`;
    // }
    // const res = await fetch(
    //     apiUrl,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${process.env.API_TOKEN}`,
    //         "Client-ID": "DSj6I8qbyHf-Zm2fGExuug",
    //       },
    //     },
    //   );
    // const result = await res.json();


    return (
        <section>
            <div className="container mx-auto">
            <div className="px-1 md:px-12 lg:px-20 py-20 flex flex-col items-center space-y-10">
                <SectionTitle title="Business Based on Search" />
                <div className="flex flex-wrap gap-10 justify-center items-center">
                {/* {result.businesses.map((item: Business) => (
                    <Card key={item.id} data={item} />
                ))} */}
                <div>{data.keyword}</div>
                <div>{data.location}</div>
                <div>{data.searchby}</div>
                </div>
            </div>
            </div>
        </section>
    )
}
