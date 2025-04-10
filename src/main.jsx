;import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './app/layout';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <RootLayout />      
  </HelmetProvider>
);
