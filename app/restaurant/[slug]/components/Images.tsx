const Images = ({ images }: { images: string[] }) => {
  console.log(images[0]);
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} {images.length > 1 ? "Photos" : "Photo"}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <img className="w-56 h-44 mr-1 mb-1" src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Images;
