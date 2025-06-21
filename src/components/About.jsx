import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('https://myportfolio-admin-lq7m.onrender.com/api/about/')
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.error('Error fetching about data:', err));
  }, []);

  if (!aboutData) return null; 

  const {
    name,
    bio,
    profile_image,
    telegram,
    github,
    linkedin,
    facebook,
    twitter,
    instagram,
    youtube,
  } = aboutData;

  const miniTitle = 'About Me';
  const myname = name || 'Your Name';
  const description = bio;
  const funfacts = [
    { number: 20, title: 'Projects' },
    { number: 3, title: 'Years Experience' },
    { number: 100, title: 'Cups of Coffee' },
  ];
  const btnText = 'Contact Me';
  const btnUrl = 'contact';

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="effect-1">
          <img
            src="/images/effect-1.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
        <div className="effect-2">
          <img
            src="/images/effect-2.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>
        <div className="row align-items-center justify-content-center gy-5">
          <div
            className="col-lg-6 col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div className="about-banner text-center">
              <img
                src={
                  profile_image
                    ? `https://myportfolio-admin-lq7m.onrender.com${aboutData.profile_image}`
                    : '/images/default-avatar.png'
                }
                alt="Thumb"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 px-lg-5">
            <div
              className="about-text"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="section-heading">
                {miniTitle && (
                  <h6>
                    <span>{miniTitle}</span>
                  </h6>
                )}
                {myname && <h2>{parser(myname)}</h2>}
              </div>
              <p>{description}</p>

              <div className="review-box">
                {funfacts.map((item, index) => (
                  <div className="r-box" key={index}>
                    <h3>
                      {item.number}
                      <span>+</span>
                    </h3>
                    <label>{item.title}</label>
                  </div>
                ))}
              </div>

              <div className="btn-bar">
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  className="px-btn"
                >
                  <span>{btnText}</span>{' '}
                  <i>
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>

              <div className="social-links mt-3">
                {telegram && <a href={telegram} target="_blank" rel="noreferrer"><Icon icon="bi:telegram" /></a>}
                {github && <a href={github} target="_blank" rel="noreferrer"><Icon icon="bi:github" /></a>}
                {linkedin && <a href={linkedin} target="_blank" rel="noreferrer"><Icon icon="bi:linkedin" /></a>}
                {instagram && <a href={instagram} target="_blank" rel="noreferrer"><Icon icon="bi:instagram" /></a>}
                {facebook && <a href={facebook} target="_blank" rel="noreferrer"><Icon icon="bi:facebook" /></a>}
                {twitter && <a href={twitter} target="_blank" rel="noreferrer"><Icon icon="bi:twitter" /></a>}
                {youtube && <a href={youtube} target="_blank" rel="noreferrer"><Icon icon="bi:youtube" /></a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
