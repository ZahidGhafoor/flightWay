import React from "react";
import "./Navbar.scss";
import Logo from "../../../assets/Logo.svg";
import LoginIcon from "../../../assets/LoginIcon.svg";
import Image from "next/image";

const Navbar = () => {
  const navbarLinks = [
    {
      name: "Group Flights",
      url: "/group-flight",
    },
    {
      name: "Visa",
      url: "/",
    },
    {
      name: "Umrah",
      url: "/",
    },
    {
      name: "Services",
      url: "/",
    },
    {
      name: "Tracking",
      url: "/",
    },
  ];
  return (
    <div className="container">
      <div className="navbarContainer">
        <div className="logo">
          <Image src={Logo} alt="FlightWay Logo" />
        </div>

        <div className="navLinks">
          {navbarLinks.map((data, i) => {
            return (
              <a className="singleLink" href={data.url}>
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

// import React from "react";
// import { Button } from "antd";
// import "./Navbar.scss";
// import logo from "../../../assets/Logo.svg";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img
//           src={logo} // Replace with your logo path
//           alt="FlightWay Logo"
//         />
//       </div>
//       <div className="menu">
//         <a href="#group-flights">Group Flights</a>
//         <a href="#visa">Visa</a>
//         <a href="#umrah">Umrah</a>
//         <a href="#services">Services</a>
//         <a href="#tracking">Tracking</a>
//       </div>
//       <div className="login-button">
//         <Button type="primary" icon={<i className="anticon anticon-login"></i>}>
//           Login
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
