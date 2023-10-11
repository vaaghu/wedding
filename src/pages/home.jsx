import backgroundImg from "@images/cupid.jpg";

import homeStyle from "@styles/home.module.scss";
import indexStyle from "@styles/index.module.scss";
import React from "react";

import cardsInfo from "@utils/cardsInfo.json";
import CardComp from "@components/card";
// import { List } from "antd";

import PropTypes from "prop-types";

export default function Home({ navigate }) {
  return (
    <section className={indexStyle.section}>
      <div className={homeStyle.firstContainer}>
        <img src={backgroundImg} className={homeStyle.imgBackground} />
        <img />
        <p className={homeStyle.title}>NAME_ONE & NAME_TWO</p>
        <p className={homeStyle.info}>
          Nov 22, 2023 • Chennai, Tamil Nadu, India
        </p>
      </div>
      <div>some info</div>
      <div className={homeStyle.cardContainer}>
        {cardsInfo.map((card) => {
          return <CardComp cardInfo={card} key={card.id} navigate={navigate} />;
        })}
      </div>
    </section>
  );
}
Home.propTypes = {
  navigate: PropTypes.func.isRequired,
};
