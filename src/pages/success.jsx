/* eslint-disable prettier/prettier */
import React from "react";
import indexStyle from "@styles/index.module.scss";
import homeStyle from "@styles/home.module.scss";
import successStyle from "@styles/success.module.scss";

import backgroundImg from "@images/butterfly.webp";

const successComp = () => {
  return (
    <section className={indexStyle.section}>
      <div className={homeStyle.firstContainer}>
        <img
          src={backgroundImg}
          alt="background image"
          className={homeStyle.imgBackground}
        />
        <div>
          <iframe
            className={successStyle.iframe}
            src="https://www.youtube.com/embed/6G9jcEoxsNA?si=PaLPuuxhqOcuQpw9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* <p>success</p> */}
    </section>
  );
};

export default successComp;
