import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import anime from "animejs";
import styled from "styled-components";

import logoImage from "../../assets/images/logoImage.jpg";

const MainPortfolio: React.FC = () => {
  return (
    <BrowserRouter>
      <Header>
        <MainTitle>
          <LogoImage src={logoImage} />
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
                activeStyle={{ borderBottom: "1px solid #fff" }}
              >
                Home
              </StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink
                to="/about"
                activeStyle={{ borderBottom: "1px solid #fff" }}
              >
                About
              </StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink
                to="/works"
                activeStyle={{ borderBottom: "1px solid #fff" }}
              >
                Works
              </StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink
                to="/blog"
                activeStyle={{ borderBottom: "1px solid #fff" }}
              >
                Blog
              </StyledNavLink>
            </MenuItem>
          </Menu>
        </Navigation>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/about">About</Route>
          <Route path="/works">Works</Route>
          <Route path="/blog">Blogs</Route>
        </Switch>
      </FlexWrapper>
    </BrowserRouter>
  );
};

const Header = styled.header`
  padding: 10px;
  height: 50px;
`;

const MainTitle = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const TitleText = styled.h1`
  font-size: 1.5rem;
  margin: 0 10px 0 0;
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
  height: calc(100vh - 70px);
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
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid transparent;
`;

export default MainPortfolio;
