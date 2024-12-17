"use client";
import React, { useState } from "react";
import "./book-flight.scss";
import PersonalDetails from "./components/PersonalDetails";
import { groupFlightActions } from "@/redux/slices/groupFlightSlice";
import { useDispatch, useSelector } from "react-redux";
import PassengerDetails from "./components/PassengerDetails";
import { Button } from "@/components/Atom/Button";

const BookFlight = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.groupFlight.tab);

  const steps = [
    "Personal Details",
    "Passengers Detail",
    "Payment",
    "E Ticket",
  ];

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const [val, setVal] = useState({
    fullName: "",
    email: "",
    mobile: "",
    adult: 0,
    child: 0,
    infant: 0,
    passengers: [],
  });
  console.log("val", val);

  const handleSubmit = () => {
    if (tab === 5) {
      console.log("ehllo");
    } else {
      dispatch(groupFlightActions.setTab(tab + 1));
    }
  };
  const currentTab = [
    <PersonalDetails val={val} setVal={setVal} handleSubmit={handleSubmit} />,
    <PassengerDetails val={val} setVal={setVal} handleSubmit={handleSubmit} />,
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
            <div className={`circle ${tab === index ? "active" : ""}`}></div>
            <div className="stepName">{step}</div>
          </div>
        ))}
      </div>
      {currentTab[tab]}
      <div className="buttonParent">
        <Button
          variant={tab === 0 ? "disabled" : "secondary"}
          onClick={() => dispatch(groupFlightActions.setTab(tab - 1))}>
          Back
        </Button>
        <Button onClick={handleSubmit}>Continue</Button>
      </div>
    </div>
  );
};

export default BookFlight;
