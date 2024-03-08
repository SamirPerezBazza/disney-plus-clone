import { Link, Outlet } from 'react-router-dom';
import { ProtectedRoute } from '../router/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import disneyLogo from '../assets/png/disney_logo.png';
import homeIcon from '../assets/png/home_icon.png';
import logoutIcon from '../assets/png/logout_icon.png';

export const Root = () => {
	const { user, logout } = useAuth();

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
				</ul>
				<div className="flex items-center">
					{user?.email}
					<button
						className="bg-red-500 text-white px-1 py-1 rounded ml-2"
						onClick={logout}
					>
						<img src={logoutIcon} className="w-[20px]" />
					</button>
				</div>
			</nav>
			<div>
				<Outlet />
			</div>
		</ProtectedRoute>
	);
};
