"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  let router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className=" text-left text-lg py-3 m-auto flex justify-center">
      <input
        type="text"
        placeholder="State, city, or town"
        className="rounded text-lg mr-3 p-2 w-[450px]"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-red-600 px-9 py-2 rounded text-white"
        onClick={() => {
          location === "" ? null : router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
