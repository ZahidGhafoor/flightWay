"use client";

import React from "react";

import IslamabadOffice from "../../../assets/IslamabadOffice.svg";
import PeshawarOffice from "../../../assets/PeshawarOffice.svg";
import SwatOffice from "../../../assets/SwatOffice.svg";

import PIA from "../../../assets/PIA.svg";
import Emirates from "../../../assets/Emirates.svg";
import Qatar from "../../../assets/Qatar.svg";
import SaudiAirlines from "../../../assets/SaudiAirlines.svg";
import TurkishAirlines from "../../../assets/TurkishAirlines.svg";
import EithadAirways from "../../../assets/EithadAirways.svg";
import Logo from "../../../assets/Logo.svg";

import Image from "next/image";

import "./Footer.scss";
import Slider from "react-slick";

const Footer = () => {
  const airlineLogos = [
    {
      src: PIA,
      alt: "Pakistan International Airlines",
    },
    { src: Emirates, alt: "Emirates" },
    { src: Qatar, alt: "Qatar Airways" },
    { src: SaudiAirlines, alt: "Saudi Airlines" },
    { src: TurkishAirlines, alt: "Turkish Airlines" },
    { src: EithadAirways, alt: "Etihad Airways" },
  ];
  const Office = [
    {
      src: IslamabadOffice,
      location: "Islamabad",
    },
    {
      src: PeshawarOffice,
      location: "Peshawar",
    },
    {
      src: SwatOffice,
      location: "Swat",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="flightSliderParent">
        <div className="flightSliderHeading">Featured in</div>
        <Slider {...settings}>
          {airlineLogos.map((logo, index) => (
            <div key={index} className="flightsParent">
              <Image src={logo.src} alt="FlightWay Logo" />

              <div className="airLineName">{logo.alt}</div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flightSliderParent officeParent">
        <div className="flightSliderHeading">Our Offices</div>

        <div className="ourOffices">
          {Office.map((data, i) => {
            return (
              <div key={i} className="office1">
                <Image src={data.src} alt="FlightWay Logo" />
                <div className="officeLocation">{data.location}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="subscribeParent">
        <div className="leftSubscribeText">
          Subscribe to get <br /> Awesome discount
        </div>
        <div className="rightSubscribeSection">
          <input
            type="text"
            placeholder="Please provide your email address"
            className="subscribeInput"
          />
          <div className="subscribeButton">Subscribe</div>
        </div>
      </div>
      <div className="footerInfo">
        <div className="firstInfo">
          <Image src={Logo} alt="FlightWay Logo" />
          <div className="InfoText">
            Flight Way is Pakistan’s trusted travel agency, offering seamless
            bookings for flights, domestic tours, visas, Umrah packages,
            honeymoon trips, hotels, and travel insurance.
          </div>
        </div>
        <div className="secondInfo">
          <div className="secondInfoText" style={{ fontWeight: 700 }}>
            Company
          </div>
          <div className="secondInfoText">Contact Us</div>
          <div className="secondInfoText">Privacy Policy</div>
          <div className="secondInfoText">Terms & Conditions</div>
          <div className="secondInfoText">Career</div>
        </div>
        <div className="secondInfo">
          <div className="secondInfoText" style={{ fontWeight: 700 }}>
            Contact Us
          </div>
          <div className="secondInfoText">3070A, Giga Mall, Islamabad</div>
          <div className="secondInfoText">+(92) 304 111 0636</div>
          <div className="secondInfoText">support@flightway.pk</div>
        </div>
      </div>

      <div className="copyRightText">
        Copyright © 2024 <span>Flightway</span> All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
