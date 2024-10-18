import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="itDone" caption="Get" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br />
              </span>

              <br />
              <h3>+91 7985179107</h3>
              <h3>+91 7897664959</h3>
              <br />
              <a href="https://forms.gle/ojSiNAXpE5HwNQwY9">
                <button className="button-primary">Request for quote</button>
              </a>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="sections/Agency.js">About agency</Link>
              </li>
              <li>
                <Link href="/">Our team</Link>
              </li>
              <li>
                <Link href="/">Showcase</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Demo design system</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/showcase">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/showcase">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/showcase">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/showcase">E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/getitdonee/?viewAsMember=true">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 GetitDone. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>GORKCODER COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
