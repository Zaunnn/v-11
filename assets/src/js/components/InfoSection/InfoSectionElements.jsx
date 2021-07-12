import styled from "styled-components";

export const InfoContainer = styled.div`
  margin-top: 0;
  position: relative;
  z-index: 1;
  background-color: #fff;
  height: 100vh;
`;
export const InfoWrapper = styled.div`
  /* display: grid;
  z-index: 1;
  height: 860px;

  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center; */
`;
export const InfoRows = styled.div`
  display: grid;
  grid-template-areas: "row1" "row2" "row3";
  align-items: stretch;
  height: 100%;
  width: 100%;
`;

export const Row1 = styled.div`
  grid-area: row1;
  background: pink;
`;
export const Row2 = styled.div`
  grid-area: row2;
  background: black;
`;

export const Row3 = styled.div`
  grid-area: row3;
  background: aqua;
`;
