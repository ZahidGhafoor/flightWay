"use client";
import React, { useEffect, useState } from "react";
import "./book-flight.scss";
import PersonalDetails from "./components/PersonalDetails";
import { groupFlightActions } from "@/redux/slices/groupFlightSlice";
import { useDispatch, useSelector } from "react-redux";
import PassengerDetails from "./components/PassengerDetails";
import { Button } from "@/components/Atom/Button";
import PaymentDetails from "./components/PaymentDetails";
import { useRouter } from "next/navigation";
import { isBasicValid } from "./constant";
import ETicket from "./components/ETicket";

const BookFlight = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.groupFlight.tab);
  const flightData = JSON.parse(localStorage.getItem("flightData"));
  const router = useRouter();

  const steps = [
    "Personal Details",
    "Passengers Detail",
    "Payment",
    "E Ticket",
  ];

  useEffect(() => {
    if (!flightData?._id) {
      router.push("/group-flight");
    }
  }, []);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const [val, setVal] = useState(() => {
    const savedState = localStorage.getItem("bookingForm");
    return savedState
      ? JSON.parse(savedState)
      : {
          fullName: "",
          email: "",
          mobile: "",
          adult: 0,
          child: 0,
          infant: 0,
          passengers: [],
        };
  });
  useEffect(() => {
    localStorage.setItem("bookingForm", JSON.stringify(val));
  }, [val]);
  useEffect(() => {
    if (!flightData?._id) {
      router.push("/group-flight");
    }
  }, [val, flightData]);

  console.log("val", val);

  const isValid = isBasicValid(tab, val);

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
    <PaymentDetails val={val} setVal={setVal} handleSubmit={handleSubmit} />,
    <ETicket val={val} setVal={setVal} handleSubmit={handleSubmit} />,
  ];

  const [time, setTime] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="bookingFlightContainer container">
      <div className="flightHeader">
        <div className="left">
          <div className="route">LHE - RUH</div>
          <div className="flightNumber">Flight No. | Oct 01, 2024</div>
        </div>
        <div className="left">
          <div className="expireIn">Booking will be expired in</div>
          <div className="expireTime">{formatTime(time)} minutes</div>
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
        {tab !== 0 && (
          <Button
            variant={"secondary"}
            onClick={() => dispatch(groupFlightActions.setTab(tab - 1))}>
            Back
          </Button>
        )}
        <Button
          variant={!isValid ? "disabled" : "primary"}
          onClick={handleSubmit}>
          {tab === 2 ? "Book Online" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default BookFlight;
