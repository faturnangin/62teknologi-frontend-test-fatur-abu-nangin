"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Globe2 } from "lucide-react";
import { Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button";
import Card from "./Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SearchResult from "./SearchResult";
import SectionTitle from "./SectionTitle";
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
type YelpResponse = {
  businesses: Business[];
};
export default function SearchSection() {
  const [country, setCountry] = useState('United States');
  const [searchBy, setSearchBy] = useState('');
  const [keyword, setKeyword] = useState<InputValue>('');
  const [data, setData] = useState<YelpResponse>();
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e:any) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   let apiUrl = `http://localhost:3000/api/business?location=${country}`;
  //   if (searchBy !== '' && keyword !== '') {
  //     apiUrl += `&searchBy=${searchBy}&keyword=${keyword}`;
  //   }
  //   try {
  //     const res = await fetch(apiUrl);
  //     const result = await res.json();
  //     setIsLoading(false)
  //     setData(result);
  //   } catch (error) {
  //     setIsLoading(false)
  //     console.error('Error fetching data:', error);
  //   }
  // };
  const fetchData = async () => {
    setIsLoading(true);
    let apiUrl = `${process.env.VERCEL_URL}/api/business?location=${country}`;
    if (searchBy !== '' && keyword !== '') {
      apiUrl += `&searchBy=${searchBy}&keyword=${keyword}`;
    }
    try {
      const res = await fetch(apiUrl);
      const result: YelpResponse = await res.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
    <section id="main" className="bg-blue dark:bg-deepblue relative">
      <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-grayscale1/0 via-grayscale2 dark:via-[#666F7A] to-grayscale1/0" />
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-grayscale1/0 via-grayscale2 dark:via-[#666F7A] to-grayscale1/0" />
      <div className="container mx-auto">
         <div className="-translate-y-1/2">
          <div className="mx-1 md:mx-12 lg:mx-20 p-5 bg-grayscale1 dark:bg-darkestblue rounded-lg border border-grayscale2 shadow-md flex items-center justify-center">
            <form onSubmit={handleSubmit}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5"
            >
              <div className="flex items-center gap-x-2">
                <Label>Country: </Label>
                <Select onValueChange={(newValue) => {setCountry(newValue);}} defaultValue={country}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="MY" />
                  </SelectTrigger>
                  <SelectContent>
                  {["Argentina",
                    "Australia",
                    "Austria",
                    "Belgium",
                    "Brazil",
                    "Canada",
                    "Chile",
                    "Czech Republic",
                    "Denmark",
                    "Finland",
                    "France",
                    "Germany",
                    "Hong Kong",
                    "Italy",
                    "Japan",
                    "Malaysia",
                    "Mexico",
                    "Netherlands",
                    "New Zealand",
                    "Norway",
                    "Philippines",
                    "Poland",
                    "Portugal",
                    "Republic of Ireland",
                    "Singapore",
                    "Spain",
                    "Sweden",
                    "Switzerland",
                    "Taiwan",
                    "The Netherlands",
                    "Turkey",
                    "United Kingdom",
                    "United States"].map((country: string, index) => (
                    <SelectItem key={`${country}-${index}`} value={country}>{country}</SelectItem>
                  ))}
                  </SelectContent>
                </Select>
                
              </div>
              <div className="flex items-center gap-x-2">
                <Label>Search By: </Label>
                <Select onValueChange={(newValue) => {setSearchBy(newValue);}} defaultValue={searchBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Choose Parameter" />
                  </SelectTrigger>
                  <SelectContent>
                  {[
                    "name",
                    "latitude",
                    "longitude",
                    "term",
                    "radius",
                    "categories",
                    "locale",
                    "price",
                    "open_at",
                    "attributes",
                    "sort_by",
                  ].map((searchBy: string, index) => (
                    <SelectItem key={index} value={searchBy}>{searchBy}</SelectItem>
                  ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-x-2">
                <Label className="text-deepblue dark:text-grayscale1 whitespace-nowrap" htmlFor="value">Search Input: </Label>
                  <Input value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
              </div>
              {isLoading ? <Button type="submit" className="bg-blue"><Loader2 className="animate-spin"/> Please Wait</Button> :
                <Button type="submit" className="bg-blue"><Globe2 /> Start Discovery</Button>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <section>
    {data && 
        <div className="container mx-auto">
          <div className="px-1 md:px-12 lg:px-20 py-10 flex flex-col items-center space-y-10">
            <SectionTitle title="Business Based on Your Search" />
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {data.businesses.map((item: Business) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
    }
    </section>
  </>
  );
}
