import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function Info() {
  useEffect(() => {}, []);
  return <section>card info page</section>;
}
Info.propTypes = {
  navigate: PropTypes.func.isRequired,
};
