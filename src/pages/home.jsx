/* eslint-disable prettier/prettier */
import backgroundImg from "@images/butterfly.webp";
import weddingCouple from "@images/weddingCouple.webp";
import arrowDown from "@images/arrow_down.svg";

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
        <img
          src={backgroundImg}
          alt="background image"
          className={homeStyle.imgBackground}
        />
        <div>
          <img
            src={weddingCouple}
            alt="couple image"
            className={homeStyle.coupleImg}
          />
          <br />
          <p className={homeStyle.info}>
            Welcome to our Investment registry!
            <br />
            Thank you for being a part of our journey as we prepare to embark on
            the next big chapter of our lives.
          </p>
        </div>
        <a href="#listInfo" className={homeStyle.arrowDownAnchore}>
          <img src={arrowDown} alt="anchore" />
        </a>
      </div>
      <div id="listInfo" className={homeStyle.listInfo}>
        <h1>Our Wish list</h1>
        <p>
          In this special chapter of our lives, we have a few dreams and
          financial goals we{"'"}d love to achieve.
          <br />
          Your contributions will help us make them a reality. Every gift brings
          us one step closer to our shared dreams.
        </p>
      </div>
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
