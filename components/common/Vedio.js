import { TitleSm } from "./Title";
import Link from "next/link";

export const Vedio = ({ data }) => {
  const videoUrl = `https://www.youtube.com/embed/${data.videoId}`;

  return (
    <div className="card">
      <div className="card-media">
        {/* Embed YouTube video */}
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          title={data.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* <div className="card-details">
        <Link target="_blank" href={data.url} passHref>
          <TitleSm title={data.title} />
        </Link>
        <div className="flex">
          <span>{data.category}</span>
        </div>
      </div> */}
    </div>
  );
};
