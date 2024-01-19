import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-vjb1r4hdri234b43.us.auth0.com"
    clientId="u0XY10giM9fWzJWiifB2iBYboywHE4pI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
