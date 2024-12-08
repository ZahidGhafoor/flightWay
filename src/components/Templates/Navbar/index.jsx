"use client";
import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../../assets/Logo.svg";
import LoginIcon from "../../../assets/LoginIcon.svg";
import Image from "next/image";
import { navbarLinks } from "@/utils/constant";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="container">
      <div className="navbarContainer">
        <a href={"/"} className="logo">
          <Image src={Logo} alt="FlightWay Logo" />
        </a>

        <div className="navLinks">
          {navbarLinks.map((data, i) => {
            return (
              <a
                key={i}
                href={data.url}
                className={`singleLink ${
                  pathname === data.url ? "active" : ""
                }`}>
                {data.name}
              </a>
            );
          })}
        </div>
        <button type="button" className="loginButton">
          <Image src={LoginIcon} alt="FlightWay Logo" />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
