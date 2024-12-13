"use client";
import React, { useEffect, useState } from "react";
import GroupFlightMainImage from "../../assets/GroupFlightMainImage.svg";
import turkishAirline from "../../assets/turkishAirline.svg";
import Baggage from "../../assets/Baggage.svg";
import Trolley from "../../assets/Trolley.svg";
import Meal from "../../assets/Meal.svg";
import groupFlight from "../../assets/groupFlight.svg";

import Image from "next/image";

import "./GroupFlight.scss";
import { airports, bookings } from "@/utils/constant";
import { handleChange } from "@/utils/globalFunctions.util";
import GroupService from "@/services/groupFlight.service";
import AuthService from "@/services/auth.service";
import { Autocomplete, TextField } from "@mui/material";
import {
  groupFlightSearchAutocomplete,
  groupFlightSearchInput,
} from "./constant";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "@/components/Atom/CircleLoader";
import { useRouter } from "next/navigation";

const page = () => {
  const flightFilters = [
    { name: "All" },
    { name: "KSA" },
    { name: "UAE" },
    { name: "UK" },
    { name: "Umrah" },
  ];
  const dispatch = useDispatch();

  const [val, setVal] = useState({
    origin: "",
    destination: "",
    date: null,
  });

  const payload = {
    origin: val.origin,
    destination: val.destination,
    date: "",
  };
  console.log("pay", payload);

  const [activeFilter, setActiveFilter] = useState("All");

  const handleSearchFlight = () => {
    GroupService.getFlights(payload, dispatch);
  };

  console.log("hllo", val);
  const { loading, flights } = useSelector((state) => state.groupFlight);
  console.log("loading", loading);

  const CallItAfterOneHour = () => {
    console.log("Function Called After 1 Hour");
  };

  // useEffect(() => {
  //   AuthService.generateAuthToken();
  // }, []);
  // useEffect(() => {
  //   const TOKEN_EXPIRY_TIME = 3600000; // 1 hour in milliseconds
  //   const currentTime = Date.now();
  //   const storedTime = localStorage.getItem("tokenGeneratedAt");

  //   const callTokenFunction = () => {
  //     console.log("Calling generateAuthToken now...");
  //     AuthService.generateAuthToken();
  //     localStorage.setItem("tokenGeneratedAt", Date.now());
  //     CallItAfterOneHour();
  //   };

  //   // Check if token is expired or not present
  //   if (
  //     !storedTime ||
  //     currentTime - parseInt(storedTime, 10) >= TOKEN_EXPIRY_TIME
  //   ) {
  //     // If no token or expired, generate a new token
  //     callTokenFunction();
  //   } else {
  //     // If token exists and valid, calculate remaining time
  //     const remainingTime =
  //       TOKEN_EXPIRY_TIME - (currentTime - parseInt(storedTime, 10));
  //     console.log("Token still valid, calling in:", remainingTime);

  //     const timer = setTimeout(() => {
  //       callTokenFunction();
  //     }, remainingTime);

  //     // Cleanup
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  console.log("flightsssss", flights);

  const router = useRouter();

  return (
    <div className="container">
      <div className="groupFlightParent">
        <div className="groupFlightHero">
          <Image src={GroupFlightMainImage} alt="FlightWay Logo" />
        </div>

        <div className="flightFilters">
          {flightFilters.map((data, i) => {
            return (
              <div
                key={i}
                className={`singleFilter ${
                  activeFilter === data.name ? "active" : ""
                }`}
                onClick={() => setActiveFilter(data.name)}>
                {data.name} <br /> Flights
              </div>
            );
          })}
        </div>

        <div className="SearchGroupFlight">
          {loading && <CircleLoader />}

          <div className="searchFlightTitle">Oneway Flights</div>

          <div className="searchInputs">
            <div className="input-container">
              <label htmlFor="departure">Flight From</label>
              <Autocomplete
                disablePortal
                options={airports}
                sx={groupFlightSearchAutocomplete}
                value={
                  airports?.find((option) => option?.value === val?.origin) ||
                  null
                }
                onChange={(event, newValue) =>
                  setVal((prevVal) => ({
                    ...prevVal,
                    origin: newValue?.value || "",
                  }))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Departure Place"
                    InputProps={{
                      ...params.InputProps,
                      style: groupFlightSearchInput,
                    }}
                  />
                )}
              />
            </div>
            <div className="input-container">
              <label htmlFor="departure">Flight To</label>
              <Autocomplete
                disablePortal
                options={airports}
                sx={groupFlightSearchAutocomplete}
                value={
                  airports?.find(
                    (option) => option?.value === val?.destination
                  ) || null
                }
                onChange={(event, newValue) =>
                  setVal((prevVal) => ({
                    ...prevVal,
                    destination: newValue.value || "",
                  }))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Arrival Place"
                    InputProps={{
                      ...params.InputProps,
                      style: groupFlightSearchInput,
                    }}
                  />
                )}
              />
            </div>
            <div className="input-container">
              <label htmlFor="departure">Departure Date</label>
              <DatePicker
                sx={groupFlightSearchAutocomplete}
                value={val.date ? moment(val.date) : null}
                onChange={(newValue) =>
                  setVal((prevVal) => ({
                    ...prevVal,
                    date: newValue?.toISOString(),
                  }))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Date"
                    InputProps={{
                      ...params.InputProps,
                      style: groupFlightSearchInput,
                    }}
                  />
                )}
              />
            </div>

            <div onClick={handleSearchFlight} className="searchInputResult">
              Search
            </div>
          </div>
        </div>

        {flights?.length > 0 && (
          <div className="searchResults">
            <div className="searchResultHeading">
              {flights?.length} Results Found
            </div>
            <div className="searchResultCards">
              {flights.map((booking, index) => (
                <div
                  onClick={() => {
                    router.push("/book-flight");
                    localStorage.setItem("flightData", JSON.stringify(booking));
                  }}
                  className="searchResultSingleCard"
                  key={index}>
                  <div className="singleCardHeader">
                    <div className="headerLeft">
                      <Image
                        src={booking?.airlineLogoUrl}
                        alt="FlightWay Logo"
                        height={30}
                        width={30}
                      />
                      <div className="flightName">{booking?.airline}</div>
                    </div>
                    {/* <div className="flightType">LHE - RUH - LHE</div> */}
                    <div className="flightType">{booking?.sector}</div>
                  </div>

                  {booking?.groupItineraries?.map((data, i) => {
                    return (
                      <div key={i} className="cardFlightDetails">
                        <div className="flightFrom">
                          {/* <div className="cityName">{booking.from.city}</div>
                    <div className="flightDate">{booking.from.date}</div> */}
                          <div className="cityName">{data?.departure}</div>
                          <div className="flightDate">
                            {data?.departureDateTime}
                          </div>
                        </div>
                        <div className="flightTimeInfo">
                          <div className="TimeUpper">
                            <div className="flightType">2hr 0 min</div>
                          </div>
                          <div className="directFlight">
                            {data.isConnectedFlight
                              ? "Direct Flight"
                              : "Connecting Flight"}
                            Connecting Flight
                          </div>
                        </div>
                        <div className="flightFrom">
                          <div className="cityName">{data?.arrival}</div>
                          <div className="flightDate">
                            {data?.arrivalDateTime}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="cardFlightDetails">
                    <div className="flightFrom">
                      <div className="cityName">"DOH"</div>
                      <div className="flightDate">Oct 10</div>
                    </div>
                    <div className="flightTimeInfo">
                      <div className="TimeUpper">
                        <div className="flightType">2hr 0 min</div>
                      </div>
                      <div className="directFlight">Connecting Flight</div>
                    </div>
                    <div className="flightFrom">
                      <div className="cityName">"DOH"</div>
                      <div className="flightDate">Oct 10</div>
                    </div>
                  </div> */}
                  <div className="cardBottomDetails">
                    <div className="bottomLeft">
                      <div className="singleBottomItem">
                        <Image src={Baggage} alt="FlightWay Logo" />
                        <div>
                          <div className="serviceName">Baggage</div>
                          {/* <div className="serviceInfo">{booking.baggage}</div> */}
                          <div className="serviceInfo">
                            {flights?.[0]?.groupItineraries?.baggageAllowed}
                          </div>
                        </div>
                      </div>
                      <div className="singleBottomItem">
                        <Image src={Trolley} alt="FlightWay Logo" />
                        <div>
                          <div className="serviceName">CheckIn Bags</div>
                          <div className="serviceInfo"></div>
                        </div>
                      </div>
                      <div className="singleBottomItem">
                        <Image src={Meal} alt="FlightWay Logo" />
                        <div>
                          <div className="serviceName">Meal</div>
                          <div className="serviceInfo">
                            {flights?.[0]?.groupItineraries?.isMeal
                              ? "Included"
                              : "Not Included"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="priceButton">
                      {booking?.saleFare} /- PKR
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="customizeGroup">
          <div className="groupLeft">
            <Image src={groupFlight} alt="FlightWay Logo" />
            <div>
              <div className="upperGroupText">Now you can</div>
              <div className="bottomGroupText">
                CUSTOMIZE YOUR <span>GROUP FLIGHT</span>
              </div>
            </div>
          </div>
          <div className="requestGroup">
            Request your <br /> group
          </div>
        </div>

        <div className="termAndConditions">
          <div className="termsHeader">Terms and Conditions</div>
          <ul className="allTerms">
            <li className="singleTerm">
              Each person traveling to a foreign location has to have a valid
              visa and an ok-to-board permit. Yugo Private Limited will not be
              liable htmlFor denied boarding or any deportee expenses, including
              but not restricted to fines, claims, notices, or demands made
              against the passenger by any immigration authorities at the
              destination or by third parties htmlFor any deportee, including
              transit passengers, resulting from any rejection by the
              immigration authorities at the destination upon the passenger's
              arrival.
            </li>
            <li className="singleTerm">
              When making the reservation, passengers must supply their contact
              information (phone number and email address).
            </li>
            <li className="singleTerm">
              Tickets are non-refundable and non-changeable; seats are subject
              to availability.
            </li>
            <li className="singleTerm">
              Please note that if payment is to be made in a currency other than
              Pakistani Rupee, the fee(s) will be calculated according to the
              current exchange rate.
            </li>
            <li className="singleTerm">
              Any modification in the total number of seats or flight numbers
              may result in a revision of the rates.
            </li>
            <li className="singleTerm">
              Flight ways maintains the right, subject to market necessity, to
              change or modify the terms and conditions of this policy as
              needed.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
