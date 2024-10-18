import React from "react";
import { Title } from "./common/Title";
import { code } from "../assets/data/dummydata";
import { Vedio } from "../components/common/Vedio";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const Websites = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Long Form" />
          </div>

          <div className="hero-content grid-3 py">
            {code.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>

          <div className="card links">
            <Link href="/">
              VIEW ALL CASES <HiOutlineArrowRight className="link-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Websites;
