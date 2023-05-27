const Header = ({ name }: { name: string }) => {
  const renderTitle = (name) => {
    let arr = name.split("-");

    let location = arr[arr.length - 1];
    arr.pop();
    let restaurantName = arr.join(" ");
    return {
      location: location,
      restaurantName: restaurantName,
    };
  };
  const titleData = renderTitle(name);

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold text-white capitalize text-shadow text-center">
          {titleData.restaurantName}
        </h1>
        <h3 className="text-4xl font-bold text-white capitalize text-shadow text-center">
          {titleData.location}
        </h3>
      </div>
    </div>
  );
};

export default Header;

//curryish-tavern-toronto
// const nameArray = name.split("-");
// [curryish, tavern, toronto]
// nameArray[nameArray.length - 1] = `($nameArray[nameArray.length-1}])`
// (toronto)
