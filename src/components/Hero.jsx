import bannerImg from "../assets/banner.png";
import { FaSearch } from "react-icons/fa";


function Hero() {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-44 px-2 pt-24 text-center space-y-6 md:w-1/2 mx-auto">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">Make your interior more minimalistic & modern</h1>
      <p className="text-2xl font-normal lg:w-1/2 mx-auto">
        Turn your room with Safa into a lot more minimalist and modern with
        ease and speed
      </p>

      {/* search field */}
      <div className="relative inline-block z-30">
        <input className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none mt-8" type="text" name="" placeholder="Search Furniture" id="" />
         <div className="absolute right-3 top-1/2 transform   p-2 bg-primary rounded-full cursor-pointer">
           <FaSearch/>
         </div>
      </div>
      </div>

      {/* bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>
    </section>
  );
}

export default Hero;
