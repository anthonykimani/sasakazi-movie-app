const MovieCard = ({ image, title, description }) => {
  return (
    <div class="bg-white shadow-lg  rounded-lg max-w-[350px] m-1">
      <img className="rounded-t-sm object-cover w-[350px]" src={image} alt="" />
      <div class="p-5">
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          {title}
        </h5>

        <p class="font-normal text-gray-700 mb-3">{description}</p> 
      </div>
    </div>
  );
};

export default MovieCard;
