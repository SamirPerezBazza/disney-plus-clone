import { RouteObject } from 'react-router-dom';
import paths from './paths';
import Login from '../routes/Login';
import Home from '../routes/Home';
import { AuthProvider } from '../context/AuthContext';
import { Root } from '../routes/root';
import Category, { loader as categoryLoader } from '../routes/Category';
import { Movie, loader as movieLoader } from '../routes/Movie';
import { Favorites } from '../routes/Favorites';

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
				path: paths.favorites,
				element: <Favorites />,
				index: true,
			},
			{
				path: paths.category,
				element: <Category />,
				loader: categoryLoader,
			},
			{
				path: paths.movie,
				element: <Movie />,
				loader: movieLoader,
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
