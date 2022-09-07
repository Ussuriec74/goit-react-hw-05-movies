import { Header, HeaderNavLink } from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <HeaderNavLink to='/'>Home</HeaderNavLink>
        <HeaderNavLink to='/movies'>Movies</HeaderNavLink>
      </nav>
    </Header>
  )
}