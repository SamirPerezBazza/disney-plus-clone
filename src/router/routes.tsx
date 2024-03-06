import { RouteObject } from 'react-router-dom';
import paths from './paths';
import Login from '../routes/Login';
import Home from '../routes/Home';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';

export const routes: RouteObject[] = [
	{
		path: paths.root,
		element: (
			<AuthProvider>
				<ProtectedRoute>
					<Home />
				</ProtectedRoute>
			</AuthProvider>
		),
	},
	{
		path: paths.login,
		element: (
			<AuthProvider>
				<Login />
			</AuthProvider>
		),
	},
];
