import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ data, caption, show, path }) => {
  const websiteUrl = data.url || `${path}/${data.id}`;

  return (
    <>
      <div className="card">
        <div className="card-img">
          <Image src={data.cover} alt={data.title} width={1400} height={1400} />
        </div>
        <div className="card-details">
          <Link target="_blank" href={websiteUrl} passHref>
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link target="_blank" href={websiteUrl} passHref>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}
          <div className="flex">
            <span> {data.category} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
