import {
  showcase,
  longform,
  ImanGadzi,
  Anime,
  FastEdits,
  ShortForm,
  Advertisement,
  Animation,
  VFX,
  Faceless,
} from "../assets/data/dummydata";
import { Vedio } from "../components/common/Vedio";
import { Title, TitleSm } from "../components/common/Title";
import React from "react";

const Showcase = () => {
  return (
    <section className="showcase bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="OUR 3D AND VEDIO EDITS" />
          <Title
            title="Fresh ideas. Bold design. Smart realization."
            className="title-bg"
          />
        </div>
        {/* <div className="grid-3">
          {showcase.map((item) => (
            <Vedio data={item} key={item.id} />
          ))}
        </div> */}

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
          <Title title="VFX" />
        </div>

        <div className="hero-content grid-3 py">
          {VFX.map((item) => (
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
      </div>
    </section>
  );
};

export default Showcase;
