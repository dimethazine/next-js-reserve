import React from "react";

const SearchSideBar = () => {
  return (
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
  );
};

export default SearchSideBar;
