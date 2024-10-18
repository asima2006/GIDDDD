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
  three,
} from "../assets/data/dummydata";
import { Vedio } from "./common/Vedio";
import { Title, TitleSm } from "./common/Title";
import React from "react";

const ThreeD = () => {
  return (
    <section className="three bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="OUR 3D AND VEDIO EDITS" />
          <Title
            title="Fresh ideas. Bold design. Smart realization."
            className="title-bg"
          />
        </div>

        <div className="heading-title">
          <Title title="3D" />
        </div>

        <div className="hero-content grid-3 py">
          {three.map((item) => (
            <Vedio data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeD;
