"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      {/* below the correct is max-w-screen-lg */}
      <main className="max-w-screen-lg m-auto bg-white ">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}

        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              {/* SEARCH BAR */}
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
                  onClick={() =>
                    location === "banana" ? "" : router.push(`/search/`)
                  }
                >
                  Let's go
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/* CARD */}
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/3/50699837.jpg"
                alt="Kona Grill"
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Kona Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 Reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className="mr-3 ">Mexican</p>
                  <p className="mr-1">$$$$</p>
                  <p className="">&bull; Clearwater</p>
                </div>
                <p className="text-sm mt-1 font-bold"> Booked 3 times today</p>
              </div>
            </div>

            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
