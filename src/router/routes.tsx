import { RouteObject } from 'react-router-dom';
import paths from './paths';
import Login from '../routes/Login';
import Home from '../routes/Home';
import { AuthProvider } from '../context/AuthContext';
import { Root } from '../routes/root';
import Category from '../routes/Category';

export const routes: RouteObject[] = [
	{
		path: paths.root,
		element: <Root />,
		children: [
			{
				path: paths.home,
				element: <Home />,
			},
			{
				path: '/category',
				element: <Category />,
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
