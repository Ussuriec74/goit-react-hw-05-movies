import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: 12px 24px;
  background-color: teal;
`

export const HeaderNavLink = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 18px;
  font-weight:400;
  color:black;

  &.active {
    color: orange;
  }
`