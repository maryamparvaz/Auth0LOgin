
import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-z1f6v7q65z6mxsod.us.auth0.com"
    clientId="FppD8tO8MhQoZB0ZGm8x4JqwK8UMQDCg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
