import React, { useRef } from "react";
import { animate, motion } from "framer-motion";

import "./Banner.css";

const Banner = () => {
  const clientCounter = useRef();
  const projectsCounter = useRef();
  const UpcomingProductCounter = useRef();
  const animationClientsCount = () => {
    animate(0, 40000, {
      duration: 2,
      onUpdate: (v) => {
        clientCounter.current.textContent = v.toFixed();
      },
    });
  };
  const animateProjectsCounter = () => {
    animate(0, 1000, {
      duration: 2,
      onUpdate: (v) => {
        projectsCounter.current.textContent = v.toFixed();
      },
    });
  };
  const animateUpcomingProductCounter = () => {
    animate(0, 400, {
      duration: 2,
      onUpdate: (v) => {
        UpcomingProductCounter.current.textContent = v.toFixed();
      },
    });
  };
  const TestimonialCard = ({ name, feedback, counter, animateCounter }) => {
    return (
      <article className="section-article">
        <span className="section-span">
          <p className="numbers">
            +{" "}
            <motion.span
              ref={counter}
              whileInView={animateCounter}
            ></motion.span>
          </p>
        </span>
        <h4>{name}</h4>
        <p className="feedback">{feedback}</p>
      </article>
    );
  };
  return (
    <div className="banner mt-5">
      <h2 className="mt-3 mb-5 testimonial-title">WHAT WE ARE</h2>
      <div id="testimonial">
        <section className="testimonial-section">
          <TestimonialCard
            name={" Products"}
            feedback={
              "We are working with thousand proudcts. But in future  IN SHA ALLAH we will add more thousands products. So you can get everything you need from us. Just keep in touch."
            }
            counter={projectsCounter}
            animateCounter={animateProjectsCounter}
          ></TestimonialCard>
          <TestimonialCard
            counter={clientCounter}
            animateCounter={animationClientsCount}
            name={"Customer"}
            feedback={
              "We are have lots of happy customer. They are happy with our services. We are working to show our happy customers and their speech about our services in our website."
            }
          ></TestimonialCard>
          <TestimonialCard
            name={" Up Coming Product"}
            feedback={
              "We are dealing with some company get their qualityful product. And you will get all product you need Good morning to Good Night. We are working for you. "
            }
            counter={UpcomingProductCounter}
            animateCounter={animateUpcomingProductCounter}
          ></TestimonialCard>
        </section>
      </div>
    </div>
  );
};

export default Banner;
