import React from "react";
import { Button } from "../Button.jsx";
import {
  HomeContainer,
  HomeWrap,
  HomeBg,
  HomeRow,
  Column1,
  Column2,
  Column1Wrapper,
  Column2Wrapper,
  Heading,
  Paragraph,
  Svg,
  ButtonWrapper,
  TextWrapper,
  Button2Wrapper,
} from "./HomeSectionElements.jsx";

const HomeSection = ({ handleClick }) => {
  return (
    <HomeContainer onClick={handleClick}>
      <HomeWrap>
        <HomeBg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 12.04"
          preserveAspectRatio="none"
        >
          <path d="M 10 0 L 0 0 L 0 12 L 10 12 C 2 3 13 6 10 0" />
        </HomeBg>
        <HomeRow>
          <Column1>
            <Column1Wrapper>
              <TextWrapper>
                <Heading>
                  For every student, <br /> every classroom. <br /> Real
                  results.
                </Heading>
                <Paragraph>
                  {" "}
                  We’re a nonprofit with the mission to provide a free,
                  world-class education for anyone, anywhere.
                </Paragraph>
              </TextWrapper>
              <ButtonWrapper>
                <Button>Start Learning</Button>
                <Button>Start Teaching</Button>
                <Button>Start Parenting</Button>
              </ButtonWrapper>
            </Column1Wrapper>
          </Column1>
          <Column2>
            <Column2Wrapper>
              <Svg src={"assets/src/images/books.svg"} />
              <Button2Wrapper>
                {" "}
                <Button>Start Now</Button>
              </Button2Wrapper>
            </Column2Wrapper>
          </Column2>
        </HomeRow>
      </HomeWrap>
    </HomeContainer>
  );
};

export default HomeSection;
