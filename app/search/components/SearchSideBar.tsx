import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const fetchLocations = async () => {
  const locations = await prisma.location.findMany();
  return locations;
};

const fetchCuisines = async () => {
  const cuisine = await prisma.cuisine.findMany();
  return cuisine;
};

const SearchSideBar = async () => {
  const c = await fetchLocations();
  const b = await fetchCuisines();
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Regions</h1>

        <p className="font-light text-reg capitalize">
          {c.map((location) => (
            <p>{location.name}</p>
          ))}
        </p>
      </div>

      <div className="border-b pb-4 mt-3 ">
        <h1 className="mb-2">Cuisine</h1>

        <p className="font-light text-reg capitalize">
          {b.map((cuisine) => (
            <p>{cuisine.name}</p>
          ))}
        </p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex cursor-pointer">
          <button className="border-r border-l border-t border-b w-full hover:border-blue-500 font-light p-2 text-reg rounded-l">
            $
          </button>
          <button className="border-l border-r border-t border-b w-full hover:border-blue-500 font-light p-2 text-reg ">
            $$
          </button>
          <button className="border-l border-r border-t border-b w-full hover:border-blue-500 font-light p-2 text-reg rounded-r ">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
