import { RouteObject } from 'react-router-dom';
import paths from './paths';
import Login from '../routes/Login';
import Home from '../routes/Home';
import { AuthProvider } from '../context/AuthContext';
import { Root } from '../routes/root';
import Category, { loader as categoryLoader } from '../routes/Category';

export const routes: RouteObject[] = [
	{
		path: paths.root,
		element: (
			<AuthProvider>
				<Root />
			</AuthProvider>
		),
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				path: '/category/:category',
				element: <Category />,
				loader: categoryLoader,
			},
		],
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
