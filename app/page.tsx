import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import Image from "next/image";
import { fetchAnime } from "./action";
import Loding from "@/components/Loding";

async function Home() {
  const data = await fetchAnime(1);

  return (
    <main >
      <h1 className=" text-center text-white text-[10vh]">Collection</h1>
      {/* <AnimeCard /> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </div>
      <div className="mt-20">
      <Loding />
      </div>
    </main>
  );
}

export default Home;
