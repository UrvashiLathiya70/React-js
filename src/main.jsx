import { Suspense } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-unresolved
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// eslint-disable-next-line import/no-unresolved
import { PersistGate } from 'redux-persist/integration/react';

import App from './app';
import { store, persistor } from './redux/store';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <SnackbarProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </SnackbarProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
