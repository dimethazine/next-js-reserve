import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Price from "../../components/Price";

interface Restaurant {
  id: number;
  name: string;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  main_image: string;
  price: PRICE;
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="border-b flex pb-5 ml-4">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant.main_image} alt="" className="w-44 h-36 rounded" />
      </Link>
      <div className="pl-5">
        <Link href={`/restaurant/${restaurant.slug}`}>
          <h2 className="text-3xl">{restaurant.name}</h2>
        </Link>
        <div className="flex items-start">
          <div className="flex mb-2">★★★★☆</div>
          <div className="ml-2 leading-6 text-sm">Exceptional</div>
          <Link
            href="/restaurant/1"
            className="ml-2 hover:text-red-400 font-light text-[14px] leading-6"
          >
            (298)
          </Link>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
