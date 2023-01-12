import { Link } from "react-router-dom"
import { useState } from "react";

const Navigation = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = ()=>{
    console.log("clicked");
    setShowMenu(!showMenu);
  }

  return (
      <div className="flex justify-around items-center">
        <div className="w-[200px]">
          <img  alt="" />
          <h2 className="font-poppins text-xl text-white">SasaKazi movies</h2>
        </div>
        <div className="block sm:hidden">
          <i class="bx bx-menu bx-md text-white" onClick={toggleMenu}></i>
        </div>
        <div className="hidden sm:block">
          <ul className=" flex flex-col sm:flex-row justify-around font-poppins text-base md:text-lg text-white font-extrabold w-auto">
            <Link to={"/"}><li className="mx-2 w-[100%] min-w-[100px] ">Menu</li></Link>
            <Link to={"/catergories"}><li className="mx-2 w-[100%] min-w-[100px] ">Catergories</li></Link>
          </ul>
        </div>
        <div className="absolute top-0 sm:block bg-blue-900 p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  " style={showMenu ? { display:"block"}:{display:"none"}}>
          <i class='bx bx-x bx-sm text-white' onClick={toggleMenu}></i>
          <ul className=" flex flex-col sm:flex-row justify-around font-poppins text-base md:text-lg text-white font-extrabold w-auto">
            <Link to={"/"}><li className="my-2 mx-2 w-[100%] min-w-[100px] ">Menu</li></Link>
            <Link to={"/catergories"}><li className="my-2 mx-1 w-[100%] min-w-[100px] ">Catergories</li></Link>
          </ul>
        </div>


        <div className="hidden sm:flex m-2 ">
            <button className="text-white text-xl m-2">signup</button>
            <button className="text-white bg-green-300 rounded-sm py-2 px-4 text-xl">Login</button>
        </div>
      </div>
  );
};

export default Navigation;
