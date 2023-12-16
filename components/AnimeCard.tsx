import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
      delay: index * 0.25,
      ease: "easeInOut",
      duration: 0.5,
    }}
    viewport={{ amount: 0 }}

    >
    <div
      className="team"
    >
      <div className="team_box">
        <div className="profile">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-xl"
          />

          <div className="info">
            <h2 className="name text-white text-[20px] ">{anime.name}</h2>
            <p className="bio text-blue-600">Episodes - {anime.episodes}</p>
            <div>
              <p className="text-red-600 cursor-pointer">Watch now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MotionDiv>
  );
}

export default AnimeCard;
