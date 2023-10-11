import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Info({ navigate }) {
  let [cardInfo, setCardInfo] = useState(null);

  useEffect(() => {
    setCardInfo(JSON.parse(localStorage.getItem("cardInfo")));
  }, []);
  return (
    <section>
      <button
        onClick={() => {
          navigate("../");
        }}
      >
        {" "}
        back
      </button>
      {cardInfo && (
        <div>
          <p>{cardInfo.title}</p>
          <p>{cardInfo.description}</p>
          <button>BUY</button>
        </div>
      )}
    </section>
  );
}
Info.propTypes = {
  navigate: PropTypes.func,
};
