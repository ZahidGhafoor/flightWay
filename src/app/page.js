"use client";
import React from "react";
import "./home.scss";
import refundOrExcahgne from "../assets/refundOrExcahgne.svg";
import lowestPrices from "../assets/lowestPrices.svg";
import fasterAccess from "../assets/fasterAccess.svg";
import customerImage from "../assets/customerImage.svg";
import RatingStars from "../assets/RatingStars.svg";
import newZealand from "../assets/newZealand.svg";
import Image from "next/image";
import Slider from "react-slick";
import { countries, reviews } from "@/utils/constant";

const Home = () => {
  const features = [
    {
      image: refundOrExcahgne,
      title: "Refund or Change",
      info: "We are here to make your experience incredible. Reach us by phone, email, or WhatsApp.",
    },
    {
      image: lowestPrices,
      title: "Lowest Prices",
      info: "With over 100+ direct contracts with the airlines & suppliers, Flightway.pk can save you more!",
    },
    {
      image: fasterAccess,
      title: "Faster Access",
      info: "Get instant itinerary on your email when you make your booking through Flightway.pk",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="homeParent container">
      <div className="malaysiaVisit">
        <div className="leftText">
          Enjoy the visit of
          <br />
          <span>MALAYSIA</span>
        </div>
        <div className="rightButton">Book Now</div>
      </div>
      <div className="trendingVisaDestinations">
        <div className="homeHeading">Trending Visas Destination</div>
        <div className="countriesList">
          {countries.map((data, i) => {
            return (
              <div key={i} className="singleCountry">
                <Image src={newZealand} alt="FlightWay Logo" />
                <div className="countryName">{data}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="customerReviews">
        <div className="homeHeading">Happy Clients Happy Us</div>
        <Slider {...settings}>
          {reviews.map((data, i) => {
            return (
              <div key={i} className="allReviews">
                <div className="singleReview">
                  <div className="customerInfo">
                    <Image
                      src={customerImage}
                      alt="FlightWay Logo"
                      className="customerImage"
                    />
                    <div className="customerName">{data.name}</div>
                  </div>
                  <div className="ratingStars">
                    <Image src={RatingStars} alt="FlightWay Logo" />
                  </div>
                  <div className="customerReview">
                    {data?.reviewText.length > 200
                      ? data?.reviewText.slice(0, 200) + "..."
                      : data?.reviewText}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="whyBookUs">
        <div className="homeHeading">Why Book with us ?</div>

        <div className="whyBookUsFeatures">
          {features.map((data, i) => {
            return (
              <div key={i} className="singleFeature">
                <Image src={data.image} alt="FlightWay Logo" />
                <div className="featureTitle">{data.title}</div>
                <div className="flightInfo">{data.info}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
