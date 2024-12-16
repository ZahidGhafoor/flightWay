import React from "react";
import "./GeneratingTicket.scss";

import turkishAirline from "@/assets/turkishAirline.svg";
import Image from "next/image";

const GeneratingTicket = () => {
  return (
    <div className="generatingFlightTicket">
      <div className="generateFlightHeader">
        <div className="left">
          <Image
            src={turkishAirline}
            alt="FlightWay Logo"
            height={50}
            width={50}
          />
          <div className="airlineName">Turkish Airlines</div>
        </div>
        <div className="rightFlightNo">Flight No: XYZ-123</div>
      </div>
      <div className="route">LHE - RUH</div>
      <div className="totalTickets">
        <div className="tickerHonor">Adult * 1</div>
        <div className="singlePrice">86,000/- PKR</div>
      </div>
      <div className="totalTickets">
        <div style={{ fontWeight: "700" }} className="tickerHonor">
          Total
        </div>
        <div style={{ fontWeight: "700" }} className="singlePrice">
          86,000/- PKR
        </div>
      </div>
    </div>
  );
};

export default GeneratingTicket;
