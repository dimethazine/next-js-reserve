import Link from "next/link";

const RestaurantCard = () => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/kona-grill">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/3/50699837.jpg"
          alt="Kona Grill"
          className="w-full h-36"
        />
      </Link>
      <div className="p-1">
        <Link href="/restaurant/kona-grill">
          <h3 className="font-bold text-2xl mb-2">Kona Grill</h3>
        </Link>
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
  );
};

export default RestaurantCard;
