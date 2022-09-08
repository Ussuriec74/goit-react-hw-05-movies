import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column">
      <AppBar />
      <Suspense fallback={ <Loader /> }>
        <Outlet />
      </Suspense>
    </Box>
  );
};