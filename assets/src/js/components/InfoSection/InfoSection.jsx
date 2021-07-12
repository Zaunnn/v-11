import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRows,
  Row1,
  Row2,
  Row3,
} from "./InfoSectionElements.jsx";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoRows>
          <Row1 />
          <Row2 />
          <Row3 />
        </InfoRows>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
