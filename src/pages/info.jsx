import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import infoStyles from "@styles/info.module.scss";
import indexStyles from "@styles/index.module.scss";

import cardImg from "@images/images1.jpeg"
import backArrow from "@images/arrow_back.svg"
export default function Info({ navigate }) {
  let [cardInfo, setCardInfo] = useState(null);

  useEffect(() => {
    setCardInfo(JSON.parse(localStorage.getItem("cardInfo")));
  }, []);
  return (
    <section className={infoStyles.section}>
      <button
        className={infoStyles.backButton}
        onClick={() => {
          navigate("../");
        }}
      >
        <img src={backArrow} alt="arrow" />
      </button>
      {cardInfo && (
        <div className={infoStyles.card}>
          <img src={cardImg} alt="backImg" />
          <div className={infoStyles.cardInfo}>
            <p>{cardInfo.title}</p>
            <p>{cardInfo.description}</p>
            <button>BUY</button>
          </div>
        </div>
      )}
    </section>
  );
}
Info.propTypes = {
  navigate: PropTypes.func,
};
