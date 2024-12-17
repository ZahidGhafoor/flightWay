import React from "react";
import "./GeneratingTicket.scss";

import turkishAirline from "@/assets/turkishAirline.svg";
import Image from "next/image";

const GeneratingTicket = ({ val }) => {
  const flightData = JSON.parse(localStorage.getItem("flightData"));

  const bookedPassengers = [
    {
      name: "Adult",
      tickets: val?.adult,
    },
    {
      name: "Children (2-11 Years)",
      tickets: val?.child,
    },
    {
      name: "Infants (0 to 23 Months)",
      tickets: val?.infant,
    },
  ];

  // Calculate total tickets and total fare
  const totalTickets = bookedPassengers.reduce((total, data) => {
    if (data.tickets > 0) {
      return total + data.tickets;
    }
    return total;
  }, 0);

  const totalFare = totalTickets * flightData?.saleFare;

  return (
    <div className="generatingFlightTicket">
      <div className="generateFlightHeader">
        <div className="left">
          <Image
            src={flightData?.airlineLogoUrl}
            alt="FlightWay Logo"
            height={50}
            width={50}
          />
          <div className="airlineName">{flightData?.airline}</div>
        </div>
        <div className="rightFlightNo">
          Flight No: {flightData?.groupItineraries[0]?.flightNo}
        </div>
      </div>
      <div className="route">LHE - RUH</div>
      <div>
        {bookedPassengers
          ?.filter((data) => data.tickets > 0)
          ?.map((data, i) => {
            return (
              <div className="totalTickets">
                <div className="tickerHonor">
                  {data.name} * {data?.tickets}
                </div>
                <div className="singlePrice">{flightData?.saleFare} /- PKR</div>
              </div>
            );
          })}
      </div>
      {totalTickets > 0 && (
        <div className="totalTickets">
          <div style={{ fontWeight: "700" }} className="tickerHonor">
            Total
          </div>
          <div style={{ fontWeight: "700" }} className="singlePrice">
            {totalFare}/- PKR
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratingTicket;
