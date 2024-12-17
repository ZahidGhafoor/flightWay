import Input from "@/components/Atom/Input";
import React, { useEffect } from "react";
import emailInput from "@/assets/emailInput.svg";
import DateCalender from "@/assets/DateCalender.svg";
import passport from "@/assets/passport.svg";
import gender from "@/assets/gender.svg";
import Person from "@/assets/Person.svg";
import "./PassengerDetails.scss";
import { genderOptions } from "@/utils/constant";
import Select from "@/components/Atom/Select";
import DatePicker from "@/components/Atom/DatePicker";
import GeneratingTicket from "@/components/Templates/GeneratingTicket";

const PassengerDetails = ({ val, setVal, handleSubmit }) => {
  useEffect(() => {
    const totalPassengers = val.adult + val.child + val.infant;
    const updatedPassengers = Array.from(
      { length: totalPassengers },
      (_, index) => ({
        id: index + 1,
        type:
          index < val.adult
            ? "Adult"
            : index < val.adult + val.child
            ? "Child"
            : "Infant",
        fullName: "",
        surName: "",
        gender: "",
        dob: null,
        passportNumber: "",
        passportExpiry: null,
      })
    );

    setVal((prev) => ({ ...prev, passengers: updatedPassengers }));
  }, [val.adult, val.child, val.infant]);

  const handlePassengerChange = (event) => {
    const { value, name } = event.target;
    setVal((prevVal) => {
      const [_, passengerIndex, passengerField] = name.split("-");
      const updatedPassengers = [...prevVal.passengers];

      if (!updatedPassengers[passengerIndex]) {
        updatedPassengers[passengerIndex] = {
          fullName: "",
          surName: "",
          gender: "",
          dob: null,
          passportNumber: "",
          passportExpiry: null,
        };
      }

      updatedPassengers[passengerIndex][passengerField] = value;

      return {
        ...prevVal,
        passengers: updatedPassengers,
      };
    });
  };

  const handleSelect = (name, newValue, setVal) => {
    setVal((prev) => {
      const [_, passengerIndex, passengerField] = name.split("-");
      const updatedPassengers = [...prev.passengers];

      updatedPassengers[passengerIndex] = {
        ...updatedPassengers[passengerIndex],
        [passengerField]: newValue,
      };

      return {
        ...prev,
        passengers: updatedPassengers,
      };
    });
  };
  return (
    <div className="passengerDetailsParent">
      <div className="totalPassengers">
        {val.passengers.map((passenger, index) => {
          return (
            <div key={index} className="singlePassenger">
              <div className="passengerNo">
                {" "}
                Passenger {index + 1} ({passenger.type})
              </div>
              <div className="doubleFieldParent">
                <div className="doubleFieldChild">
                  <Input
                    label={"Given Name (As per passport)"}
                    placeholder="Enter your Name"
                    icon={Person}
                    value={passenger.fullName}
                    name={`passenger-${index}-fullName`}
                    handleChange={handlePassengerChange}
                  />
                </div>
                <div className="doubleFieldChild">
                  <Input
                    label={"Sur Name"}
                    placeholder="Enter your Sur Name"
                    icon={Person}
                    value={passenger.surName}
                    name={`passenger-${index}-surName`}
                    handleChange={handlePassengerChange}
                  />
                </div>
              </div>
              <div className="doubleFieldParent">
                <div className="doubleFieldChild">
                  <Select
                    label="Gender"
                    icon={gender}
                    options={genderOptions}
                    value={passenger.gender}
                    name={`passenger-${index}-gender`}
                    handleSelect={(name, newValue) =>
                      handleSelect(
                        `passenger-${index}-gender`,
                        newValue,
                        setVal
                      )
                    }
                  />
                </div>
                <div className="doubleFieldChild">
                  <DatePicker
                    label="Date of Birth"
                    icon={DateCalender}
                    value={passenger.dob}
                    name={`passenger-${index}-dob`}
                    handleChange={handlePassengerChange}
                  />
                </div>
              </div>
              <div className="doubleFieldParent">
                <div className="doubleFieldChild">
                  <Input
                    label={"Passport Number)"}
                    placeholder="Enter your Passport Number"
                    icon={passport}
                    value={passenger.passportNumber}
                    name={`passenger-${index}-passportNumber`}
                    handleChange={handlePassengerChange}
                  />
                </div>
                <div className="doubleFieldChild">
                  <DatePicker
                    label="Passport Expiry Date"
                    icon={DateCalender}
                    value={passenger.passportExpiry}
                    name={`passenger-${index}-passportExpiry`}
                    handleChange={handlePassengerChange}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <GeneratingTicket />
    </div>
  );
};

export default PassengerDetails;
