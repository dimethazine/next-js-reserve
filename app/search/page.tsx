import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl mx-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}

        {/* HEADER */}
        <div className="h-28 flex justify-center bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2 ">
          {/* SEARCH BAR */}
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="rounded mr-3 p-2 w-[450px]"
              type="text"
              placeholder="State, city or town"
            />
            <button className="bg-red-600 px-9 py-2 text-white rounded">
              Let's go
            </button>
          </div>
          {/* SEARCH BAR */}
        </div>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}

          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Regions</h1>
              <p className="font-light text-reg">Tampa</p>
              <p className="font-light text-reg">Clearwater</p>
              <p className="font-light text-reg">Safety Harbor</p>
              <p className="font-light text-reg">Palm Harbor</p>
              <p className="font-light text-reg">St Petersburg</p>
              <p className="font-light text-reg">Largo</p>
            </div>
            <div className="border-b pb-4 mt-3 ">
              <h1 className="mb-2">Cuisine</h1>
              <p className="font-light text-reg ">Mexican</p>
              <p className="font-light text-reg">Italian</p>
              <p className="font-light text-reg">Chinese</p>
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
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESTAURANT CARD */}
            <div className="border-b flex pb-5">
              <img
                src="https://resizer.otstatic.com/v2/photos/xsmall/1/23695933.jpg"
                alt=""
                className="w-56 rounded"
              />
              <div className="pl-5">
                <h2 className="text-3xl">Gratzzi Grille</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">★★★★☆</div>
                  <div className="ml-2 leading-6 text-sm">Exceptional</div>
                  <a
                    href=""
                    className="ml-2 hover:text-red-400 font-light text-[14px] leading-6"
                  >
                    (298)
                  </a>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Tampa</p>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
            {/* RESTAURANT CARD */}
          </div>
        </div>
      </main>
    </main>
  );
}
