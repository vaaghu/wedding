import React, { useState, useEffect } from "react";
import { Card, Skeleton } from "antd";
const { Meta } = Card;

import PropTypes from "prop-types";
import img from "@images/home.webp";

// import HomeStyle from "@styles/home.module.scss"
const CardComp = ({ cardInfo, navigate }) => {
  // console.log(cardInfo);

  let cardClick = () => {
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));
    navigate("./info");
  };

  let [isLoaded,setisLoaded] = useState(false);
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    import(`/src/assets/images/${cardInfo.imgName}.webp`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  return (
    
        <>
        {image && 
          <Card
          hoverable
          style={{
            width: 300,
            marginBottom: "25px",
            border: "10px solid white"
          }}
          cover={<img alt="sample" src={image} />}
          onClick={cardClick}
          onLoad={()=>{setisLoaded(true)}}
          >
          <Meta title={cardInfo.title} description={cardInfo.description} />
        </Card>
        }
        </>
        
  );
};

export default CardComp;

CardComp.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};
