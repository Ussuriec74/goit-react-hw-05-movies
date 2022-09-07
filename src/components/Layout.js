import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column">
      <AppBar />
      <Outlet />
    </Box>
  );
};