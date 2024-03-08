import { Link, Outlet } from 'react-router-dom';
import { ProtectedRoute } from '../router/ProtectedRoute';
import { AuthProvider, useAuth } from '../context/AuthContext';
import disneyLogo from '../assets/png/disney_logo.png';
import homeIcon from '../assets/png/home_icon.png';

export const Root = () => {
	const { user } = useAuth();

	return (
		<ProtectedRoute>
			<nav className="flex justify-between items-center w-full	">
				<ul className="flex items-center w-1/2 bg-transparent">
					<li className="mr-2">
						<img
							className="w-[50px]"
							src={disneyLogo}
							alt="Disney+ logo"
						/>
					</li>
					<li className="ml-3 mr-2">
						<Link to="/">
							<img className="w-[30px]" src={homeIcon} alt="Home" />
						</Link>
					</li>
					<li className="ml-2">
						<input
							className="flex-1 h-full w-full bg-transparent focus:outline-none"
							placeholder="Search..."
						/>
					</li>
				</ul>
				<div>{user?.email}</div>
			</nav>
			<div>
				<Outlet />
			</div>
		</ProtectedRoute>
	);
};
