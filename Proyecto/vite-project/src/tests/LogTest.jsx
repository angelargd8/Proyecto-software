

import PropTypes from 'prop-types';

const GoogleLoginButton = ({ onClick }) => (
  <button onClick={onClick}>Login with Google</button>
);

GoogleLoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleLoginButton;
