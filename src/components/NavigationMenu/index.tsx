import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationMenu: React.FC = () => {
  return (
    <BrowserRouter>
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

export default NavigationMenu;
