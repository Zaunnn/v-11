import styled from "styled-components";

export const HomeContainer = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    /* background: #0241b1;
    background: aqua; */
  }
`;

export const HomeWrap = styled.div`
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 1250px) {
    height: 92vh;
    display: grid;
    align-items: end;
  }
`;

export const HomeBg = styled.svg`
  height: 100vh;
  width: 100vw;
  /* fill: #0271b1; */
  fill: aqua;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    align-self: row;
  }
`;

export const HomeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;

  @media screen and (max-width: 1000px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  max-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    height: 35vh;
    align-self: flex-end;
    margin: 0;
  }
`;
export const Column2 = styled.div`
  grid-area: col2;
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    height: 48vh;
    align-self: start;
  }
`;
export const Column2Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    display: grid;
    align-items: start;
    grid-template-rows: 70% 30%;
  }
`;

export const Column1Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  left: 15%;
  width: 70%;
  margin-top: 40px;
  display: grid;
  justify-content: center;
  /* background: black; */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Button2Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-self: start;
  }
`;

export const Heading = styled.h1`
  font-size: 75px;
  width: 100%;
  /* height: 45%; */
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
  margin-bottom: 0;
  margin-top: 0;
  letter-spacing: 1.4px;
  color: black;
  @media screen and (max-width: 1300px) {
    font-size: 60px;
    margin-left: 40px;
    height: auto;
  }
  @media screen and (max-width: 1150px) {
    font-size: 50px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 100px;
    margin: 10px 10px 50px 25px;
    text-align: center;
  }
`;
export const Paragraph = styled.p`
  font-size: 30px;
  width: 65%;
  margin-left: 40px;
  display: flex;
  align-items: flex-start;
  text-align: center;
  color: black;
  @media screen and (max-width: 1150px) {
    font-size: 20px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    font-size: 40px;
    margin: 0;
  }
`;

export const Svg = styled.img`
  width: 100%;
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
`;
