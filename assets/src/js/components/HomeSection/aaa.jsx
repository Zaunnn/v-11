import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  position: relative;
  z-index: 1;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const HomeBg = styled.svg`
  height: 100vh;
  width: 100vw;
  fill: #0271b1;
  position: absolute;
  z-index: 1;
`;

export const HomeH1 = styled.h1`
  margin-left: 90px;
  margin-bottom: 10px;
  color: #02162b;
  z-index: 2;
  font-size: 60px;
  height: 210px;
  width: 500px;
  position: relative;
  top: 150px;
`;

export const HomeP = styled.p`
  margin-left: 80px;
  margin-top: 10px;
  color: #02162b;
  z-index: 2;
  font-size: 20px;
  height: 100px;
  width: 550px;
  position: relative;
  top: 150px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 0;
  position: relative;
  z-index: 2;
  left: 150px;
  bottom: 0;
  position: relative;
  top: 190px;
  width: 300px;
  height: 200px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 10px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 10px;
  font-size: 20px;
`;

{
  /* <HomeContainer>
      <HomeContent>
        <HomeBg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 12.04"
          preserveAspectRatio="none"
        >
          <path d="M 10 0 L 0 0 L 0 12 L 10 12 C 2 3 13 6 10 0" />
        </HomeBg>
        <HomeH1>
          For every student, every classroom. <br /> Real results.
        </HomeH1>
        <HomeP>
          We’re a nonprofit with the mission to provide a free, world-class
          education for anyone, anywhere.
        </HomeP>
        <ButtonWrap>
          <Button>Start Learning</Button>
          <Button>Start Teaching</Button>
          <Button>Start Parenting</Button>
        </ButtonWrap>
      </HomeContent>
    </HomeContainer> */
}
