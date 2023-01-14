import { Navigate } from 'react-router-dom';

function PrivateRoute({ onLogin, children }) {
	return onLogin ? children : <Navigate to="/" />;
}

export default PrivateRoute;
