import React from "react";
import { Title } from "./common/Title";
import { brand } from "../assets/data/dummydata";
import Image from "next/image";

const Brand = () => {
  return (
    <>
      <section className="brand">
        <div className="container">
          <div className="heading-title">
            <Title title="WE ARE PROUD TO WORK WITH THESE COMPANIES" />
          </div>
          <div className="brand-content grid-6 py">
            {brand.map((data) => (
              <div className="images" key={data.id}>
                <Image
                  src={data.cover}
                  alt={data.id}
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
