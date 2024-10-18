import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="itDone" caption="Get" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              HOME
            </Link>
            {/* <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              Agency
            </Link> */}
            {/* <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              Edits
            </Link>  */}
            <Link
              href="/three"
              className={activeLink == "/three" ? "activeLink" : "none"}
            >
              3D PROJECTS
            </Link>
            {/* <Link
              href="/website"
              className={activeLink == "/website" ? "activeLink" : "none"}
            >
              Websites
            </Link> */}
            {/* <Link
              href="/team"
              className={activeLink == "/team" ? "activeLink" : "none"}
            >
              Team
            </Link> */}
            {/* <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Services
            </Link> */}
            {/* <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              Showcase
            </Link> */}
            {/* <Link
              href="/blogs"
              className={activeLink == "/blogs" ? "activeLink" : "none"}
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              Contact
            </Link>
            <a href="https://wa.me/917897664959">
              {" "}
              <button className="button-primary">book a consultation</button>
            </a>
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
