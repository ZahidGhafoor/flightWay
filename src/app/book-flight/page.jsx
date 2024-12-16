"use client";
import React, { useState } from "react";
import "./book-flight.scss";
import Input from "@/components/Atom/Input";
import Person from "@/assets/Person.svg";
import PlusSign from "@/assets/PlusSign.svg";
import MinusSign from "@/assets/MinusSign.svg";
import turkishAirline from "@/assets/turkishAirline.svg";
import emailInput from "@/assets/emailInput.svg";
import mobileInput from "@/assets/mobileInput.svg";
import Image from "next/image";
import { Button } from "@/components/Atom/Button";

const BookFlight = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Personal Details",
    "Passengers Detail",
    "Payment",
    "E Ticket",
  ];

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const ticketHolders = [
    {
      name: "Adult",
    },
    {
      name: "Children (2-11 Years)",
    },
    {
      name: "Infants (0 to 23 Months)",
    },
  ];
  return (
    <div className="bookingFlightContainer container">
      <div className="flightHeader">
        <div className="left">
          <div className="route">LHE - RUH</div>
          <div className="flightNumber">Flight No. | Oct 01, 2024</div>
        </div>
        <div className="left">
          <div className="expireIn">Booking will be expired in</div>
          <div className="expireTime">15:00 minutes</div>
        </div>
      </div>
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step`}
            onClick={() => handleStepClick(index)}>
            <div
              className={`circle ${
                currentStep === index ? "active" : ""
              }`}></div>
            <div className="stepName">{step}</div>
          </div>
        ))}
      </div>

      <div className="currentStepContainer">
        <div className="stepHeading">Personal Information</div>
        <div className="personalDetailsParent">
          <div className="doubleFieldParent">
            <div className="doubleFieldChild">
              <Input
                label={"Full Name"}
                placeholder="Enter your Full Name"
                icon={Person}
              />
            </div>
            <div className="doubleFieldChild">
              <Input
                label={"Email Address"}
                placeholder="Enter your Email Address"
                icon={emailInput}
              />
            </div>
          </div>
          <div className="doubleFieldParent">
            <div className="doubleFieldSingleChild">
              <Input
                label={"Mobile No"}
                placeholder="Enter your Mobile No"
                icon={mobileInput}
              />
            </div>
            <div className="doubleFieldSingleChild"></div>
          </div>

          <div className="ticketCountsParent">
            {ticketHolders.map((data, i) => {
              return (
                <div key={i} className="singleTickerCount">
                  <div className="inputLabel">
                    {data.name}{" "}
                    {i === 0 && <span style={{ color: "red" }}>*</span>}
                  </div>
                  <div className="tickerButtons">
                    <Image
                      src={PlusSign}
                      alt="FlightWay Logo"
                      height={78}
                      width={101}
                    />
                    <div className="ticketNumber">01</div>
                    <Image
                      src={MinusSign}
                      alt="FlightWay Logo"
                      height={78}
                      width={101}
                    />
                  </div>
                </div>
              );
            })}
          </div>

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
          <div className="buttonParent">
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFlight;
