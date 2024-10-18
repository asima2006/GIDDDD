import React from "react";
import { Title } from "./common/Title";
import {
  showcase,
  longform,
  ImanGadzi,
  Anime,
  FastEdits,
  ShortForm,
  Advertisement,
  Animation,
  
  Faceless,
} from "../assets/data/dummydata";
import { Vedio } from "../components/common/Vedio";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const ShowCase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Long Form" />
          </div>

          <div className="hero-content grid-3 py">
            {longform.map((item) => (
              <Vedio data={item} key={item.id} />
            ))}
          </div>

          <div className="heading-title">
            <Title title="Iman Gadzi" />
          </div>

          <div className="hero-content grid-3 py">
            {ImanGadzi.map((item) => (
              <Vedio data={item} key={item.id} />
            ))}
          </div>

          <div className="heading-title">
            <Title title="Anime" />
          </div>

          <div className="hero-content grid-3 py">
            {Anime.map((item) => (
              <Vedio data={item} key={item.id} />
            ))}
          </div>

          <div className="heading-title">
            <Title title="Fast Edits" />
          </div>

          <div className="hero-content grid-3 py">
            {FastEdits.map((item) => (
              <Vedio data={item} key={item.id} />
            ))}
          </div>

          <div className="heading-title">
            <Title title="Short Form Talking Head" />
          </div>

          <div className="hero-content grid-3 py">
            {ShortForm.map((item) => (
              <Vedio data={item} key={item.id} />
            ))}
          </div>

          <div className="heading-title">
            <Title title="Advertisement" />
          </div>

          <div className="hero-content grid-3 py">
            {Advertisement.map((item) => (
              <Vedio data={item} key={item.id} />
            ))}
          </div>

          <div className="heading-title">
            <Title title="Animation" />
          </div>

          <div className="hero-content grid-3 py">
            {Animation.map((item) => (
              <Vedio data={item} key={item.id} />
            ))}
          </div>

         

      
          <div className="heading-title">
            <Title title="FACELESS" />
          </div>

          <div className="hero-content grid-3 py">
            {Faceless.map((item) => (
              <Vedio data={item} key={item.id} />
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

export default ShowCase;
