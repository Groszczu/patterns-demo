import React from 'react';
const { UserService } = require('../services');

const connect = (connectFunction) => (WrappedComponent) => {
  const connectedProps = connectFunction(UserService.getUsers());

  return () => <WrappedComponent {...connectedProps} />;
};

export default connect;
