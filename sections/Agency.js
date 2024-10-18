import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Testimonial from "../components/Testimonial";
import { Title, TitleSm } from "../components/common/Title";
import Image from "next/image";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products since 2001" />
              <p className="desc-p">
                Getitdone has been at the forefront of transforming businesses
                into digital success stories over the past few years. Our
                journey involves collaborating with diverse businesses across
                multiple domains, making us incredibly versatile and well-versed
                in various fields. The dynamic experiences gained from working
                with a wide range of clients have molded us into a team that
                adapts to the unique needs of every business. From boosting
                online presence to cultivating thriving audiences, our
                interactive approach has garnered success stories across
                industries
              </p>
              <div className="grid-2">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <Image
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <Image
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width={100}
                height={100}
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                We aspire to be the catalyst that transforms visions into
                digital realities, helping brands connect meaningfully with
                their audiences. Our commitment extends beyond mere services; we
                envision a digital landscape where innovation, creativity, and
                technology converge seamlessly to elevate every business we
                touch
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
