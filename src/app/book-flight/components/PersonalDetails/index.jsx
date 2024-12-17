import React from "react";
import Input from "@/components/Atom/Input";
import Person from "@/assets/Person.svg";
import PlusSign from "@/assets/PlusSign.svg";
import MinusSign from "@/assets/MinusSign.svg";
import emailInput from "@/assets/emailInput.svg";
import mobileInput from "@/assets/mobileInput.svg";
import Image from "next/image";
import { Button } from "@/components/Atom/Button";
import { handleChange } from "@/utils/globalFunctions.util";
import GeneratingTicket from "@/components/Templates/GeneratingTicket";

import "./PersonalDetails.scss";
const PersonalDetails = ({ val, setVal, handleSubmit }) => {
  const ticketHolders = [
    {
      name: "Adult",
      key: "adult",
    },
    {
      name: "Children (2-11 Years)",
      key: "child",
    },
    {
      name: "Infants (0 to 23 Months)",
      key: "infant",
    },
  ];

  const handleIncrement = (key) => {
    setVal((prevState) => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const handleDecrement = (key) => {
    setVal((prevState) => ({
      ...prevState,
      [key]: prevState[key] > 0 ? prevState[key] - 1 : 0,
    }));
  };
  return (
    <div className="currentStepContainer">
      <div className="stepHeading">Personal Information</div>
      <div className="personalDetailsParent">
        <div className="doubleFieldParent">
          <div className="doubleFieldChild">
            <Input
              label={"Full Name"}
              placeholder="Enter your Full Name"
              icon={Person}
              name="fullName"
              value={val.fullName}
              handleChange={(e) => handleChange(e, setVal)}
            />
          </div>
          <div className="doubleFieldChild">
            <Input
              label={"Email Address"}
              placeholder="Enter your Email Address"
              icon={emailInput}
              name="email"
              value={val.email}
              handleChange={(e) => handleChange(e, setVal)}
            />
          </div>
        </div>
        <div className="doubleFieldParent">
          <div className="doubleFieldSingleChild">
            <Input
              label={"Mobile No"}
              placeholder="Enter your Mobile No"
              icon={mobileInput}
              name="mobile"
              value={val.mobile}
              handleChange={(e) => handleChange(e, setVal)}
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
                  <div
                    onClick={() => handleDecrement(data.key)}
                    className="cursor">
                    <Image
                      src={MinusSign}
                      alt="Minus"
                      height={78}
                      width={101}
                    />
                  </div>
                  <div className="ticketNumber">{val[data.key]}</div>
                  <div
                    onClick={() => handleIncrement(data.key)}
                    className="cursor">
                    <Image src={PlusSign} alt="Plus" height={78} width={101} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <GeneratingTicket />
      </div>
    </div>
  );
};

export default PersonalDetails;
