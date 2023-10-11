import React from "react";
import { Card } from "antd";
const { Meta } = Card;

import PropTypes from "prop-types";
import img from "@images/images1.jpeg";

// import HomeStyle from "@styles/home.module.scss"
const APP = ({ cardInfo, navigate }) => {
  console.log(cardInfo);

  let cardClick = () => {
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));
    navigate("./info");
  };

  return (
    <Card
      hoverable
      style={{
        width: 300,
        marginBottom: "20px",
      }}
      cover={<img alt="sample" src={img} />}
      onClick={cardClick}
    >
      <Meta title={cardInfo.title} description={cardInfo.description} />
    </Card>
  );
};

export default APP;

APP.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};
