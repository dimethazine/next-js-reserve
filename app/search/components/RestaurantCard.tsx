import Link from "next/link";
import React from "react";

const RestaurantCard = () => {
  return (
    <div className="border-b flex pb-5">
      <Link href="/restaurant/1">
        <img
          src="https://resizer.otstatic.com/v2/photos/xsmall/1/23695933.jpg"
          alt=""
          className="w-56 rounded"
        />
      </Link>
      <div className="pl-5">
        <Link href="/restaurant/1">
          <h2 className="text-3xl">Gratzzi Grille</h2>
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
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Tampa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/1">View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
