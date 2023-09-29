import backgroundImg from "@images/butterfly.webp";

import homeStyle from "@styles/home.module.scss";
import indexStyle from "@styles/index.module.scss";

import cardsInfo from "@utils/cardsInfo.json";

import CardComp from "@components/card";

import React from "react";
import { List } from "antd";

import PropTypes from "prop-types";

export default function Home({ navigate }) {
  return (
    <section className={indexStyle.section}>
      home page
      <div>
        <img src={backgroundImg} className={homeStyle.imgBackground} />
        <img />
        <p>title</p>
      </div>
      <div>some info</div>
      <List
        className={homeStyle.cardBox}
        grid={{
          justify: "space-evenly",
          gutter: 20,
          itemLayout: "vertical",
        }}
        dataSource={cardsInfo}
        renderItem={(cardInfo, index) => (
          <List.Item>
            <CardComp key={index} cardInfo={cardInfo} navigate={navigate} />
          </List.Item>
        )}
      />
      <div>gallery img cards</div>
    </section>
  );
}
Home.propTypes = {
  navigate: PropTypes.func.isRequired,
};
