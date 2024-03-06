import { AuthProvider } from '../context/AuthContext';

export const Root = () => {
	return (
		<AuthProvider>
			<h1>Root</h1>
		</AuthProvider>
	);
};
