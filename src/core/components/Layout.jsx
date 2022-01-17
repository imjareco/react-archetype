import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';
import { Navbar } from 'core/components/Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar title={'Archetype'} />
      <Container fixed>
        <Box pb={5}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};