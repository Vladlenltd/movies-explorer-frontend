import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ onLogin, children }) {
	return onLogin ? children : <Navigate to="/sign-up" />;
}

export default PrivateRoute;
