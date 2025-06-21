import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import SocialBtns from "./SocialBtns";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    fetch("https://myportfolio-admin-lq7m.onrender.com/api/hero/")
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);

  useEffect(() => {
    fetch("https://myportfolio-admin-lq7m.onrender.com/api/api/social-links/")
      .then((res) => res.json())
      .then((data) => setSocialData(data))
      .catch((err) => console.error("Error fetching social links:", err));
  }, []);

  // Бұл if шарт енді рендерге әсер етеді, hook-тарға емес.
  if (!heroData) return null;

  const { name, title, typingText, description, btnText, btnUrl, imgUrl } =
    heroData || {};

  const myname = name;
  const head = title;
  const bio = description;
  const typing = typingText;
  const btnT = btnText;
  const btnU = btnUrl;

  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{myname}</span>
              </h6>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {head}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                style={{ position: "relative", minHeight: "3rem" }} // тұрақты биіктік
              >
                <span
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    height: 0,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  I'm a Full-Stack Developer
                </span>
                <TypeAnimation sequence={typing} speed={0} repeat={Infinity} />
              </h2>

              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {bio}
              </p>
              <div
                className="btn-bar d-flex align-items-center gap-3 flex-wrap"
                style={{ marginBottom: "50px" }}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ScrollLink
                  to={btnU}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn"
                >
                  <span>Get in touch</span>
                  <i className="d-flex">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>

                <SocialBtns
                  socialBtns={socialData}
                  variant="d-flex align-items-center"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hs-banner">
              <img
                src={
                  imgUrl
                    ? `https://myportfolio-admin-lq7m.onrender.com${heroData.imgUrl}`
                    : "/images/default-avatar.png"
                }
                alt="Thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
