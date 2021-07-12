import React, { useState } from "react";
import HomeSection from "../components/HomeSection/HomeSection.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import InfoSection from "../components/InfoSection/InfoSection.jsx";

const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };
  const handleClickFromHome = () => {
    setIsOpen(false);
    console.log("clicked");
  };
  console.log(isOpen);
  return (
    <>
      {" "}
      <SideBar isOpen={isOpen} handleClick={handleClick} />
      <NavBar isOpen={isOpen} handleClick={handleClick} />
      <HomeSection handleClick={handleClickFromHome} />
      <InfoSection />
    </>
  );
};

export default WelcomePage;
