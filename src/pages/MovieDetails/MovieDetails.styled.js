import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${p => p.theme.space[7]}px;
  margin: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  text-decoration: none;
  background-color: ${p => p.theme.colors.btnColor};
  color: ${p => p.theme.colors.black};
  padding: 0 ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.small};
`;

export const BtnList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  border-bottom: ${p => p.theme.borders.bold} ${p => p.theme.colors.gray};
`;

export const AdditionalBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${p => p.theme.space[6]}px;
  text-decoration: none;
  background-color: ${p => p.theme.colors.btnColor};
  color: ${p => p.theme.colors.black};
  padding: 0 ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.small};
`;

    