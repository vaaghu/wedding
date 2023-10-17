/* eslint-disable prettier/prettier */
import backgroundImg from "@images/butterfly.webp";
import homeStyle from "@styles/home.module.scss";
import indexStyle from "@styles/index.module.scss";
import React, { useEffect, useRef } from "react";

import cardsInfo from "@utils/cardsInfo.json";
import CardComp from "@components/card";
// import { List } from "antd";

import PropTypes from "prop-types";
// import Carousel from "@components/carousel";

export default function Home({ navigate }) {
  const sectionRef = useRef(null);
  function CatpureScroll(event) {
    localStorage.setItem("scrollTop", event.currentTarget.scrollTop);
  }
  useEffect(() => {
    if (sectionRef.current) {
      // console.log(localStorage.getItem("scrollTop"));
      sectionRef.current.scrollTop = parseInt(
        localStorage.getItem("scrollTop")
      ); // Set the desired initial value (in pixels)
    }
  }, []);
  return (
    <section
      className={indexStyle.section}
      onScroll={CatpureScroll}
      ref={sectionRef}
    >
      <div className={homeStyle.firstContainer}>
        <img src={backgroundImg} className={homeStyle.imgBackground} />
        <div>
          <p className={homeStyle.title}>SRIPRIYA & PRASANNA</p>
          <p className={homeStyle.info}>
            Nov 22, 2023 • Chennai, Tamil Nadu, India
          </p>
        </div>
      </div>
      {/* <div className={homeStyle.CarouselContainer}>
        <Carousel />
      </div>
      <div className={homeStyle.eventCardContainer}>
        <div className={homeStyle.eventCard}>
          <p>ENGAGEMENT (NICHIATHARTHAM) CEREMONY</p>
          <p>NOVEMBER 22, 2023 11:00–11:45</p>
          <p>
            Sri Krishnaswamy Kalyana Mandapam 1B Hindi Prachar Saba Road,
            Chennai, TN, 600017, India
          </p>
        </div>
        <div className={homeStyle.eventCard}>
          <p>RECEPTION</p>
          <p>NOVEMBER 22, 2023 11:00–11:45</p>
          <p>
            Sri Krishnaswamy Kalyana Mandapam 1B Hindi Prachar Saba Road,
            Chennai, TN, 600017, India
          </p>
        </div>
        <div className={homeStyle.eventCard}>
          <p>WEDDING (MUHURTHAM)</p>
          <p>NOVEMBER 22, 2023 11:00–11:45</p>
          <p>
            Sri Krishnaswamy Kalyana Mandapam 1B Hindi Prachar Saba Road,
            Chennai, TN, 600017, India
          </p>
        </div>
      </div> */}
      <h1>Our Wish list</h1>
      <br />
      <div className={homeStyle.cardContainer}>
        {cardsInfo.map((card, index) => {
          return <CardComp key={index} cardInfo={card} navigate={navigate} />;
        })}
      </div>
    </section>
  );
}
Home.propTypes = {
  navigate: PropTypes.func.isRequired,
};
