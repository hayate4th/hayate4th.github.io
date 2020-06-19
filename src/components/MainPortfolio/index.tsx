import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";

import logoImage from "../../assets/images/logoImage.jpg";
import NavigationMenu from "../NavigationMenu";

const MainPortfolio: React.FC = () => {
  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: ".animated-logo-image",
        translateX: ["100vw", "0vw"],
        translateY: ["100vw", "0vw"],
        easing: "linear",
        opacity: 1,
        scale: [50, 1],
        duration: 750,
      })
      .add({
        targets: "html",
        backgroundColor: "#fff",
        easing: "linear",
        duration: 1000,
        delay: 250,
      });
  }, []);

  return (
    <>
      <Header>
        <MainTitle>
          <LogoImage className="animated-logo-image" src={logoImage} />
          <TitleText>hayate4th&apos;s Porfolio</TitleText>
        </MainTitle>
      </Header>
      <NavigationMenu />
    </>
  );
};

const Header = styled.header`
  height: 65px;
  margin-bottom: 20px;
  padding: 0;
`;

const MainTitle = styled.div`
  border-bottom: 3px solid #000;
  display: flex;
  padding: 0 0 15px 0;
`;

const LogoImage = styled.img`
  border-radius: 50%;
  height: 50px;
  margin-right: 10px;
  opacity: 0;
  width: 50px;
`;

const TitleText = styled.h1`
  align-self: center;
  color: #000;
  font-size: 1.5rem;
  margin: 0 10px 0 0;
  vertical-align: middle;
`;

export default MainPortfolio;
