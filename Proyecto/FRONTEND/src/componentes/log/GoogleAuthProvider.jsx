//componente de google oauth provider
import React from 'react'; /* se pone react, proque como babel lo traspasa*/

import { GoogleOAuthProvider } from '@react-oauth/google';

import PropTypes from 'prop-types';

const GoogleAuthProvider = ({ children }) => {
  
  const clienteId = import.meta.env.VITE_GOOGLE_CLIENT_ID;  
  return (
    <GoogleOAuthProvider clientId={clienteId}>
      {children}
    </GoogleOAuthProvider>
  );
};
// Prop validation
GoogleAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  

export default GoogleAuthProvider;