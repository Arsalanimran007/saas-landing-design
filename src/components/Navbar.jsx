import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";

const Navbar = () => {
  return (
    <div className="bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
        <Image src={logoImage} alt="Saas Logo" className="h-12 w-12 relative" />

        </div>

        <div className="border border-white/30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu text-white "
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <nav className="items-center gap-6 hidden sm:flex">
          <a href="#" className="text-white/60  hover:text-white/100 transition">About</a>
          <a href="#" className="text-white/60 hover:text-white/100 transition ">Features</a>
          <a href="#" className="text-white/60 hover:text-white/100 transition ">Updates</a>
          <a href="#" className="text-white/60 hover:text-white/100 transition ">Help</a>
          <a href="#" className="text-white/60 hover:text-white/100 transition ">Customers</a>
          <button className="bg-white text-black font-medium py-2 px-4 rounded-lg">Get for free</button>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
