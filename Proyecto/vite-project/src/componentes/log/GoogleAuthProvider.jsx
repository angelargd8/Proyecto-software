//componente de google oauth provider

import { GoogleOAuthProvider } from '@react-oauth/google';

import PropTypes from 'prop-types';

const GoogleAuthProvider = ({ children }) => {
  
  const clienteId ="30472634326-rbomjumikpc7llu20snb7bcvmmc4h87n.apps.googleusercontent.com"  
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