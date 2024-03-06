import { Link, Outlet } from 'react-router-dom';
import { ProtectedRoute } from '../router/ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';

export const Root = () => {
	return (
		<AuthProvider>
			<ProtectedRoute>
				<header className="h-10 w-full bg-blue-500">
					<nav className="w-full bg-transparent	">
						<ul className="flex">
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/login">Log out</Link>
							</li>
						</ul>
					</nav>
				</header>
				<div id="detail">
					<Outlet />
				</div>
			</ProtectedRoute>
		</AuthProvider>
	);
};
