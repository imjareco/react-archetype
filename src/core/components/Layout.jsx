import React from 'react';
import { Outlet } from 'react-router-dom';

import { useTranslations } from 'core/i18n';

import { Box, Container } from '@mui/material';
import { Navbar } from 'core/components/Navbar';

export const Layout = () => {
  const { t } = useTranslations();
  return (
    <>
      <Navbar title={t('core.title.app', { app: 'Archetype'})} />
      <Container fixed>
        <Box pb={5}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};