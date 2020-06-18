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
  padding: 0 15px;
  height: 80px;
  margin-bottom: 20px;
`;

const MainTitle = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 3px solid #000;
`;

const LogoImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  opacity: 0;
`;

const TitleText = styled.h1`
  font-size: 1.5rem;
  margin: 0 10px 0 0;
  color: #000;
  vertical-align: middle;
  align-self: center;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Navigation = styled.nav`
  align-self: center;
  max-width: 200px;
  width: 200px;
  height: calc(100vh - 80px);
  padding: 0 15px;
  border-right: 3px solid #000;
`;

const Menu = styled.ul`
  font-size: 1.5rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  text-align: center;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 3px solid transparent;
`;

export default MainPortfolio;
