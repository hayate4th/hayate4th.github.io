import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import anime from "animejs";
import styled from "styled-components";

import logoImage from "../../assets/images/logoImage.jpg";

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
    <BrowserRouter>
      <Header>
        <MainTitle>
          <LogoImage className="animated-logo-image" src={logoImage} />
          <TitleText>hayate4th&apos;s Porfolio</TitleText>
        </MainTitle>
      </Header>

      <FlexWrapper>
        <Navigation>
          <Menu>
            <MenuItem>
              <StyledNavLink
                exact
                to="/"
                activeStyle={{ borderBottom: "3px solid #000" }}
              >
                Home
              </StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink
                to="/about"
                activeStyle={{ borderBottom: "3px solid #000" }}
              >
                About
              </StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink
                to="/works"
                activeStyle={{ borderBottom: "3px solid #000" }}
              >
                Works
              </StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink
                to="/blog"
                activeStyle={{ borderBottom: "3px solid #000" }}
              >
                Blog
              </StyledNavLink>
            </MenuItem>
          </Menu>
        </Navigation>
        <Switch>
          <Route exact path="/">
            <div style={{ color: "#000", padding: "20px" }}>Home</div>
          </Route>
          <Route path="/about">
            <div style={{ color: "#000", padding: "20px" }}>About</div>
          </Route>
          <Route path="/works">
            <div style={{ color: "#000", padding: "20px" }}>Works</div>
          </Route>
          <Route path="/blog">
            <div style={{ color: "#000", padding: "20px" }}>Blogs</div>
          </Route>
        </Switch>
      </FlexWrapper>
    </BrowserRouter>
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
  padding-bottom: 15px;
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
  margin-right: 10px;
  vertical-align: middle;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Navigation = styled.nav`
  align-self: center;
  border-right: 3px solid #000;
  height: calc(100vh - 115px);
  max-width: 200px;
  padding: 0 15px 0 0;
  width: 200px;
`;

const Menu = styled.ul`
  font-size: 1.5rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  text-align: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  border-bottom: 3px solid transparent;
  color: #000;
  display: inline-block;
  font-weight: bold;
  height: 100%;
  text-decoration: none;
  width: 100%;
`;

export default MainPortfolio;
