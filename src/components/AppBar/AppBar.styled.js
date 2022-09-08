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
  min-height: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.accentColor};
`;

export const HeaderNavLink = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight:${p => p.theme.fontWeights.normal};
  color:${p => p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.black};;
  }
`;