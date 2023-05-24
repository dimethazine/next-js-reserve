import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl mx-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold text-white capitalize text-shadow text-center">
              Kona Grill
            </h1>
            <h3 className="text-4xl font-bold text-white capitalize text-shadow text-center">
              Tampa
            </h3>
          </div>
        </div>
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] ounded p-3 shadow">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2">
              <Link href="/restaurant/1" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/1/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RESTAURANT NAVBAR */}
            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Kona Grill</h1>
            </div>
            {/* TITLE */}
            {/* RATINGS */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>★★★★☆</p>
                <p className="text-reg ml-3">4.9</p>
                <div>
                  <p className="text-reg ml-4"> 600 Reviews</p>
                </div>
              </div>
            </div>
            {/* RATINGS */}
            {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Welcome to Kona Grill Tampa, located at MetWest International in
                the heart of Tampa’s Westshore Business District, across from
                International Plaza. Kona Grill is a classic American Grill with
                great steak and seafood - complemented by the best choice of
                sushi and margaritas at any grill in America. Kona Grill
                features a global menu of contemporary American favorites,
                award-winning sushi, and specialty craft cocktails in a
                polished, casual atmosphere. From brunch & lunch to dinner &
                happy hour, the restaurant offers a range of freshly prepared
                dishes from the grill, seasonal menu items and fan-favorite
                dishes across all dayparts. Kona Grill offers both indoor and
                outdoor patio dining at all its locations, $3, $6, $9 happy hour
                offered weekdays & NEW weekend brunch, guided by a passion for
                quality food and exceptional service.
              </p>
            </div>
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                7 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/47150631.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/47150634.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/47150632.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/47150636.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/25805026.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* IMAGES */}
            {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">RK</h2>
                      </div>
                      <p className="whitespace-nowrap mt-1 text-center">
                        Michael Jordan
                      </p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">★★★★☆</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Really our fault for choosing a very busy place to
                          celebrate Mother's Day. I have never waited two hours
                          for a reservation before. It won't change our minds
                          about going back, just not on such a busy day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          {/* RESERVATION CARD PORTION */}
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party Size</label>
                <select
                  name=""
                  className="py-3 bg-white border-b font-light"
                  id=""
                >
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="py-3 border-b font-light">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
          {/* RESERVATION CARD PORTION */}
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
