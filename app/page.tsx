import Link from "next/link";
import SearchSection from "@/components/SearchSection";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import {
  Category,
  Business,
  BusinessesResponse,
  Coordinates,
  Location,
} from "@/types/Businesses";

export default async function Home() {
  const response = await fetch(
    "https://api.yelp.com/v3/businesses/search?location=Malaysia&sort_by=review_count&limit=5",
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Client-ID": "DSj6I8qbyHf-Zm2fGExuug",
      },
    },
  );
  const data = await response.json();
  return (
    <div className="overflow-auto">
      <div className="absolute w-full h-screen rounded-full -top-1/2 dark:bg-blue/25 -z-50 blur-[200px]" />
      <section id="hero">
        <div className="container mx-auto">
          <div className="px-1 md:px-12 lg:px-20 py-32">
            <div className="flex flex-col space-y-10">
              <div
                id="banner"
                className="flex flex-wrap items-center justify-between gap-y-5"
              >
                <div className="space-y-5">
                  <h1 className="text-center text-4xl lg:text-5xl xl:text-6xl leading-normal lg:leading-tight xl:leading-tight font-bold text-deepblue dark:text-grayscale1">
                    We let you find any kind of business{" "}
                    <span className="text-blue dark:text-grayscale3">
                      everywhere
                    </span>
                  </h1>
                  <h5 className="text-center text-lg md:text-xl lg:text-2xl font-medium text-darkestblue dark:text-grayscale12">
                    From piza place in Rome 🍕 to sushi bar in Tokyo 🍥
                  </h5>
                  <h5 className="text-center text-base md:text-xl font-medium text-grayscale3 dark:text-grayscale2">
                    Powered by Yelp! business api
                  </h5>
                  <div className="flex justify-center items-center space-x-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SearchSection />
      <section>
        <div className="container mx-auto">
          <div className="px-1 md:px-12 lg:px-20 py-20 flex flex-col items-center space-y-10">
            <SectionTitle title="Business Based on Countries" />
            <div className="flex flex-wrap gap-10 justify-center items-center">
              {data.businesses.map((item: Business) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
