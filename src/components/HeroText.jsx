const HeroText = () => {
  return (
    <div className="h-[500px] px-10 ">
        <div className="flex flex-col text-white font-poppins">
      <h1 className="text-5xl font-open">Thor: Love and Thunder(2022)</h1>
      <h3 className="my-5 text-gray-400">
        <span>70%</span> Audience vote{" "}
      </h3>
      <h4 className="w-[300px] text-xl">
        Thor enlists the help of valykrie, korg and ex girlfriend to fight gorr
        the god butcher, who intends to make the gods extinct.
      </h4>
      <div className="flex my-5">
        <i class="bx bx-add-to-queue bx-md mr-2"></i>
        <i class="bx bx-play-circle bx-md"></i>
      </div>
    </div>
    </div>
  );
};

export default HeroText;
