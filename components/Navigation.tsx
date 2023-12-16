
import { navLinks } from "@/constants/navilink";


function Navigation() {
  return (
    <nav className=" w-full  flex p-6 justify-between items-center navbar z-10 ease-in-0.5 translate">
        <h1 className="text-white text-[20px]">ANIME WORLD</h1>
      <ul className=" list-none sm:flex hidden justify-end items-center flex-1 text-white ">
        {navLinks.map((nav, index) =>(
            <li className=" mr-6 text-[18px] hover:text-[#d69559] "><a href="">{nav.title}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
