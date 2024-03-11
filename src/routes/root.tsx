import { Link, Outlet, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../router/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import { ProfileDropdown } from '../components/DropDown/ProfileDropdown';
import { useEffect } from 'react';

import { IStaticMethods } from 'preline/preline';
import { FavoritesProvider } from '../context/FavoritesContext';

import disneyLogo from '../assets/png/disney_logo_white.png';
import homeIcon from '../assets/png/home_icon.png';
import heartIcon from '../assets/png/heart-logo.png';
declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

import 'preline/preline';

export const Root = () => {
	const { user, logout } = useAuth();

	const location = useLocation();

	useEffect(() => {
		window.HSStaticMethods.autoInit();
	}, [location.pathname]);

	return (
		<ProtectedRoute>
			<FavoritesProvider>
				<header>
					<nav className="bg-[#040420] flex justify-between items-center w-full px-4 py-2">
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
									<img
										className="w-[30px]"
										src={homeIcon}
										alt="Home"
									/>
								</Link>
							</li>
							<li className="ml-3 mr-2">
								<Link to="/favorites">
									<img
										className="w-[30px]"
										src={heartIcon}
										alt="Favorites"
									/>
								</Link>
							</li>
						</ul>
						<ProfileDropdown name={user?.name ?? ''} profilePic="">
							<button
								type="button"
								onClick={logout}
								className="absolute top-10 right-4 z-20 text-white bg-[#1d3980] rounded-md px-6 py-2 hover:bg-[#3566ea] hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#1d3980] focus:ring-opacity-50"
							>
								Logout
							</button>
						</ProfileDropdown>
					</nav>
				</header>
				<div>
					<Outlet />
				</div>
			</FavoritesProvider>
		</ProtectedRoute>
	);
};
