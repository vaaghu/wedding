import React, { useEffect } from "react";
import PropTypes from "prop-types";
import infoStyles from "@styles/info.module.scss";

export default function Button({ payment_id }) {
  if (!payment_id) return null;

  const createOrUpdateScript = () => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");
    let script = document.querySelector("#razorpayScript");

    if (script) {
      script.dataset.payment_button_id = payment_id;
      rzpPaymentForm.appendChild(script);
    } else {
      script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.id = "razorpayScript";
      script.dataset.payment_button_id = payment_id;
      rzpPaymentForm.appendChild(script);
    }
  };

  useEffect(createOrUpdateScript, []);

  return <form id="rzp_payment_form" className={infoStyles.cardButton}></form>;
}

Button.propTypes = {
  payment_id: PropTypes.string,
};
