import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient, PRICE, Location } from "@prisma/client";

const prisma = new PrismaClient();
export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  cuisine: {
    name: string;
  };
  location: Location;
  price: PRICE;
}
const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
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

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      {/* original is px-36 not px-10 */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
        {/* <RestaurantCard key={restaurants.id}/> */}
      </div>
    </main>
  );
}
