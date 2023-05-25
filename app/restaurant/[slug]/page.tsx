import { PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const prisma = new PrismaClient();

export interface RestaurantDetailsType {
  id: number;
  name: string;
  description: string;
  images: string[];
  location: {
    name: string;
  };
}

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurants = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      location: true,
    },
  });

  return restaurants;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  console.log(params.slug);
  console.log(restaurant);
  return (
    <>
      <div className="bg-white w-[70%] ounded p-3 shadow">
        <RestaurantNavBar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
