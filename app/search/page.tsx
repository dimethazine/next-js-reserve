import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();
const fetchRestaurants = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    slug: true,
    price: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  console.log(searchParams.city);
  const restaurants = await fetchRestaurants(searchParams.city);

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <>
            {restaurants.length ? (
              restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))
            ) : (
              <p>Sorry, we did not find any restaurants in this area.</p>
            )}
          </>
        </div>
      </div>
    </>
  );
}
