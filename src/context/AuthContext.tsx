import { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
	children: React.ReactNode;
}

export interface User {
	email: string;
	password: string;
}

interface AuthContextValue {
	user: User | null;
	login: (data: User) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
	user: null,
	login: () => {},
	logout: () => {},
});

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useLocalStorage('user', null);
	const navigate = useNavigate();

	// call this function when you want to authenticate the user
	const login = useCallback(
		(data: User) => {
			setUser(data);
			navigate('/');
		},
		[setUser, navigate]
	);

	// call this function to sign out logged in user
	const logout = useCallback(() => {
		setUser(null);
		navigate('/login', { replace: true });
	}, [setUser, navigate]);

	const value: AuthContextValue = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user, login, logout]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
