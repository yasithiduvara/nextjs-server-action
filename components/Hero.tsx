import Image from "next/image";
import {Archivo_Black  } from 'next/font/google'

const archio = Archivo_Black({
    subsets: ['latin'],
    weight: ['400']
  })

function Hero() {
  return (
    <header className="bg-[url('/naruto2.jpg')] bg-fixed bg-no-repeat bg-cover opacity-3 h-[70vh] bg-black ">
      <div className=" flex justify-start p-5">
        <h1 className={`sm:text-[7.5rem] text-5xl text-white lg:max-w-lg font-bold leading-[120%] mt-12 pt-10 ${archio.className} text-[rgba(255,125,4,0.92)]`}>
          Anime <br /> <span className="text-[#4b3d33] ml-16 pl-3">World</span>
        </h1>
      </div>
    </header>
  );
}

export default Hero;
