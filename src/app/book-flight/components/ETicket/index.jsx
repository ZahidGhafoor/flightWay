import React from "react";
import "./ETicket.scss";
import { Button } from "@/components/Atom/Button";
import turkishAirline from "@/assets/turkishAirline.svg";
import Image from "next/image";
import Baggage from "@/assets/Baggage.svg";
import Trolley from "@/assets/Trolley.svg";
import Meal from "@/assets/Meal.svg";
import { Checkbox } from "@mui/material";

const ETicket = () => {
  return (
    <div className="eTickerContainer">
      <div className="orderIdParent">
        <div className="leftOrder">
          <div className="firstLeft">
            <div className="heading">Order ID</div>
            <div className="orderNumber">77676667</div>
          </div>
          <div className="firstLeft">
            <div className="heading">PNR</div>
            <div className="orderNumber">345678</div>
          </div>
        </div>
        <Button variant="warning">Hold</Button>
      </div>

      <div className="ticketShapeContainer">
        <div className="ticketShape">
          <div className="ticketHeader">
            <Image
              src={turkishAirline}
              alt="FlightWay Logo"
              height={50}
              width={50}
            />
            <div className="fightName">Turkish Airlines</div>
          </div>
          <div className="flightBody">
            <div className="upperBody">
              <div className="first">
                <div className="fromAB">LHE</div>
                <div className="fromActual">Lahore</div>
              </div>
              <div className="bodyCenter">
                <div className="upperTime">2 Hours</div>
                <div className="circles">
                  <div className="firstCircle"></div>
                  <div className="firstCircle"></div>
                </div>
                <div className="upperTime">Direct Flight</div>
              </div>
              <div className="first">
                <div className="fromAB">RUH</div>
                <div className="fromActual">Riyadh</div>
              </div>
            </div>
            <div className="ticketFooter">
              <div className="footerLeft">
                <div className="time">04:30 PM</div>
                <div className="date">Oct 06, 2024</div>
              </div>
              <div className="baggageInfo">
                <div className="singleBottomItem">
                  <Image src={Baggage} alt="FlightWay Logo" />
                  <div>
                    <div className="serviceName">Baggage</div>
                    {/* <div className="serviceInfo">{booking.baggage}</div> */}
                    <div className="serviceInfo">07 KGs</div>
                  </div>
                </div>
                <div className="singleBottomItem">
                  <Image src={Trolley} alt="FlightWay Logo" />
                  <div>
                    <div className="serviceName">CheckIn Bags</div>
                    <div className="serviceInfo">20 KGs (1 Piece)</div>
                  </div>
                </div>
                <div className="singleBottomItem">
                  <Image src={Meal} alt="FlightWay Logo" />
                  <div>
                    <div className="serviceName">Meal</div>
                    <div className="serviceInfo">
                      {/* {flights?.[0]?.groupItineraries?.isMeal
                        ? "Included"
                        : "Not Included"} */}
                      Included
                    </div>
                  </div>
                </div>
              </div>
              <div className="footerLeft">
                <div className="time">06:30 PM</div>
                <div className="date">Oct 06, 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className="buyerSummary">
          <div className="heading">Price Summary</div>
          <div className="info">
            <div className="infoLeft">
              <div className="infoKey">Name</div>
              <div className="infoValue">Zahid</div>
            </div>
            <div className="infoLeft">
              <div className="infoKey">Price</div>
              <div className="infoValue">82,000/- PKR</div>
            </div>
          </div>
          <div className="buttonsParent">
            <Button size="medium" variant="warning">
              Cancel Booking
            </Button>
            <Button size="medium">Download Ticket</Button>
          </div>
          <div className="withFare">
            <Checkbox defaultChecked color="success" />
            <div className="checkboxLabel">With Fare</div>
          </div>
        </div>
      </div>
      <div className="passengerDetails">
        <div className="cardHeading">Passenger Details</div>
        <div className="totalPassengers">
          <div className="singlePassenger">
            <div className="name">Zahid Ghafoor</div>
            <div className="name">45445454</div>
            <div className="name">Adult</div>
          </div>
          <div className="singlePassenger">
            <div className="name">Tayyab</div>
            <div className="name">909909090</div>
            <div className="name">Adult</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETicket;
