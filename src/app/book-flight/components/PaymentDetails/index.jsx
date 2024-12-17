import React from "react";
import "./PaymentDetails.scss";
import GeneratingTicket from "@/components/Templates/GeneratingTicket";

import payLater from "@/assets/payLater.svg";
import Image from "next/image";

const PaymentDetails = ({ val, setVal, handleSubmit }) => {
  return (
    <div className="paymentDetailsParent">
      <GeneratingTicket val={val} />
      <div className="paymentOptions">
        <div className="paymentHeading">Payment Methods</div>
        <div className="allPaymentMethods">
          <div class="payment-option">
            <label for="pay-later">
              <Image src={payLater} alt="Pay Later" />
              <div className="labelText">Pay Later</div>
            </label>
            <input type="radio" id="pay-later" name="payment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
