import React from 'react';
import i18n from 'core/i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import { QueryClientProvider, QueryClient } from 'react-query';

import RoutesProvider from 'core/RoutesProvider';
import translations from 'core/translations';
import 'core/sanitize/reset.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      notifyOnChangeProps: false
    }
  }
});

const Application = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n(translations)} >
        <Router>
          <RoutesProvider />
        </Router>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default Application;