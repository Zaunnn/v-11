import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 10px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 10px;
  font-size: 20px;
`;

const Btn = ({ className, children }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => setHover(!hover);
  return (
    <button
      className={className}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {children} {hover ? <ArrowForward /> : <ArrowRight />}
    </button>
  );
};

export const Button = styled(Btn)`
  max-width: 280px;
  max-height: 50px;
  margin: 10px;
  background-color: #00b4ab;
  padding: 16px 50px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  outline: none;
  border: none;
  &:hover {
    background: #fff;
  }
  @media screen and (max-width: 1000px) {
    max-width: 400px;
    width: 400px;
    max-height: 120px;
    height: 120px;
    font-size: 45px;
  }
`;
