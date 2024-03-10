import { Link, Outlet, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../router/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import disneyLogo from '../assets/png/disney_logo.png';
import homeIcon from '../assets/png/home_icon.png';
import { ProfileDropdown } from '../components/DropDown/ProfileDropdown';
import { useEffect } from 'react';

import { IStaticMethods } from 'preline/preline';
import { FavoritesProvider } from '../context/FavoritesContext';
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
					<nav className="bg-[#040420] flex justify-between items-center w-full px-4">
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
						</ul>
						<ProfileDropdown name={user?.name ?? ''} profilePic="">
							<button
								type="button"
								onClick={logout}
								className="absolute top-10 right-4 z-20 text-white"
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
