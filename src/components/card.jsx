/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Card, Progress } from "antd";
const { Meta } = Card;

import PropTypes from "prop-types";

// import HomeStyle from "@styles/home.module.scss"
const CardComp = ({ cardInfo, navigate }) => {
  // console.log(cardInfo);

  let cardClick = () => {
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));
    navigate("./info");
  };

  let [image, setImage] = useState(null);
  let [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(Math.round(Math.random() * 100));
    import(`../assets/images/${cardInfo.imgName}.webp`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  return (
    <>
      {image && (
        <Card
          hoverable
          style={{
            width: 300,
            marginBottom: "25px",
            border: "10px solid white",
            fontFamily: "CormorantGaramond, Poppins, sans-serif",
            fontSize: "14px",
            backgroundColor: "#fff4f4",
          }}
          cover={<img alt="sample" src={image} />}
          onClick={cardClick}
        >
          <Meta title={cardInfo.title} description={cardInfo.description} />
          <br />
          {progress >= 1 && (
            <Progress
              style={{
                fontFamily: "CormorantGaramond, Poppins, sans-serif",
                fontSize: "14px",
              }}
              status={progress != 100 ? "active" : "success"}
              percent={progress}
              strokeColor={{ from: "teal", to: "pink" }}
            />
          )}
        </Card>
      )}
    </>
  );
};

export default CardComp;

CardComp.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};
