/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Collapse, Progress } from "antd";
import PropTypes from "prop-types";

import infoStyles from "@styles/info.module.scss";

// import cardImg from "@images/home.webp";

import backArrow from "@images/arrow_back.svg";
export default function Info({ navigate }) {
  let [cardInfo, setCardInfo] = useState(null);
  let [collapseItems, setCollapseItems] = useState(null);
  let [progress, setProgress] = useState(0);
  let [image, setImage] = useState(null);

  useEffect(() => {
    setProgress(Math.round(Math.random() * 100));

    let info = JSON.parse(localStorage.getItem("cardInfo"));

    import(`../assets/images/${info.imgName}.jpg`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });

    setCardInfo(info);
    setProgress(Math.floor(Math.random() * 100));
    setCollapseItems([
      {
        key: "1",
        label: "Description",
        children: <p>{info.description}</p>,
      },
    ]);
  }, []);
  return (
    <section className={infoStyles.section}>
      <button
        className={infoStyles.backButton}
        onClick={() => {
          navigate("../");
        }}
      >
        <img src={backArrow} alt="back" />
      </button>
      {cardInfo && (
        <div className={infoStyles.card}>
          <div className={infoStyles.firstCardDiv}>
            <img src={image} alt="backImg" />
            <div className={infoStyles.cardInfo}>
              <p>{cardInfo.title}</p>
              <Progress
                status={progress != 100 ? "active" : "success"}
                type="dashboard"
                percent={progress}
                strokeColor={{ "0%": "teal", "100%": "pink" }}
                style={{
                  fontFamily: "CormorantGaramond, Poppins, sans-serif",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
          <div className={infoStyles.secondCardDiv}>
            {collapseItems && (
              <Collapse
                items={collapseItems}
                style={{
                  width: "100%",
                  backgroundColor: "#fffffe",
                  fontFamily: "CormorantGaramond, Poppins, sans-serif",
                  fontSize: "17px",
                }}
                bordered={false}
              />
            )}
            <button className={infoStyles.cardButton}>Gift it!</button>
          </div>
        </div>
      )}
    </section>
  );
}
Info.propTypes = {
  navigate: PropTypes.func,
};
