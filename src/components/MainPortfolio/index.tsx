import React from "react";
import styled from "styled-components";

import logoImage from "../../assets/images/logoImage.jpg";

const MainPortfolio: React.FC = () => {
  return (
    <Header>
      <LogoImage src={logoImage} />
      <MainTitle>hayate4th</MainTitle>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
`;

const LogoImage = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin-right: 10px;
`;

const MainTitle = styled.h1`
  margin: 0;
  vertical-align: middle;
  align-self: center;
`;

export default MainPortfolio;
