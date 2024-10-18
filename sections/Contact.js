import Link from "next/link";
import { Title, TitleSm } from "../components/common/Title";
import React, { useState } from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    phoneno: "",
    projectDescription: "",
  });

  const { name, email, budget, phoneno, projectDescription } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/0xsahilx/google_sheets/MqCFEwhhqxfxMsPG?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              name,
              email,
              budget,
              phoneno,
              projectDescription,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      // You can handle the response here if needed
      // console.log(response);
      await response.json();
      setFormData({
        ...formData,
        name: "",
        email: "",
        budget: "",
        phoneno: "",
        projectDescription: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+91 7897664959</h3>
                  <span>Call us: Mon - Sun anytime 24/7</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>India</h3>
                  <span>IIT Patna</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>getitdone8239@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                {/* <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>shanzalsiddiqui2@gmail.com</h3>
                  <span>Founder</span>
                </div> */}
              </div>
              <ul>
               
               <li className="icon">
                  <BsFacebook size={25} />
                </li>
                
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <Link href="https://www.instagram.com/get.it.done.official/">
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                </Link>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your Budget</span>
                    <input
                      type="text"
                      name="budget"
                      value={budget}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputs">
                    <span>Mobile no.</span>
                    <input
                      type="text"
                      name="phoneno"
                      value={phoneno}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <span>Tell Us About Your Project*</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="projectDescription"
                    value={projectDescription}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="button-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
