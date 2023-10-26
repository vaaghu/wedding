import React, { useEffect } from "react";
import PropTypes from "prop-types";

import infoStyles from "@styles/info.module.scss";

export default function Button({ payment_id }) {
  useEffect(() => {
    console.log(payment_id);
    const rzpPaymentForm = document.getElementById("rzp_payment_form");
    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = payment_id;
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <>
      <form id="rzp_payment_form" className={infoStyles.cardButton}></form>
    </>
  );
}
Button.propTypes = {
  payment_id: PropTypes.string,
};
