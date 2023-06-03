"use client";
import { prisma } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const fetchRestaurants = async (location: string) => {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: location,
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      slug: true,
      price: true,
    },
  });

  return restaurants;
};

export default function Search() {
  const searchParams = useSearchParams();
  const location = searchParams.get("city").toLowerCase();
  console.log(location);
  // 'city' corresponds to '/search?city=${location}'

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
