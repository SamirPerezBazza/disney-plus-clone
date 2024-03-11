import { useState } from 'react';
import { User, useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

import Logo from '../assets/disney-logo.svg?react';
import { checkEmail, login } from '../utils/checkCredentials';
import { PageLayout } from '../layouts/PageLayout';

interface UserLogin extends Omit<User, 'name' | 'profilePic'> {
	email: string;
	password: string;
}

const Login = () => {
	const { user, login } = useAuth();

	const onSubmit = (data: User) => {
		login(data);
	};

	if (user) return <Navigate to="/" />;

	return (
		<PageLayout>
			<div className="flex flex-col gap-5 items-center h-full">
				<div>
					<Logo />
				</div>

				<Card onSubmit={onSubmit} />
			</div>
		</PageLayout>
	);
};

interface CardProps {
	onSubmit: (data: User) => void;
}

const Card = ({ onSubmit }: CardProps) => {
	const [step, setStep] = useState<number>(0);
	const [error, setError] = useState<string>('');

	const [credentials, setCredentials] = useState<UserLogin>({
		email: '',
		password: '',
	});

	const onChangeStep = async () => {
		const validEmail = await checkEmail(credentials.email);

		if (!validEmail) return setError('El correo no existe');

		if (!step) return setStep((prev) => prev + 1);

		if (step && !credentials.password.length)
			setError('La contraseña no puede estar vacía');

		const validLogin = await login(credentials.email, credentials.password);

		if (!validLogin) return setError('La contraseña es incorrecta');

		onSubmit(validLogin);
	};

	return (
		<div className="bg-white rounded-3xl w-[580px] h-1/2 py-[56px] px-[72px]">
			<h3 className="font-semibold">{step ? 'Paso 2' : 'Paso 1'}</h3>
			<h2 className="text-2xl font-bold">
				{step
					? 'Escribe tu contraseña'
					: 'Escribe tu correo para continuar'}
			</h2>
			<p className="mb-2">
				{step
					? `Es necesario iniciar sesión en la cuenta con tu correo: ${credentials.email}`
					: 'Es necesario iniciar sesión en tu cuenta. En caso de no tener una, recibirás indicaciones para crearla.'}
			</p>

			<div className="flex flex-col gap-5">
				{!step ? (
					<div className="flex flex-col justify-center items-start w-full h-[60px] bg-[#E9EBF0] py-[10px] px-[16px] rounded">
						<label className="text-xs" htmlFor="email">
							Correo electrónico
						</label>
						<input
							className="flex-1 h-full w-full bg-transparent focus:outline-none"
							name="email"
							id="email"
							type="email"
							required
							value={credentials.email}
							onChange={(e) =>
								setCredentials({
									...credentials,
									email: e.target.value,
								})
							}
						/>
					</div>
				) : (
					<div className="flex flex-col justify-center items-start w-full h-[60px] bg-[#E9EBF0] py-[10px] px-[16px] rounded">
						<label className="text-xs" htmlFor="email">
							Contraseña
						</label>
						<input
							className="flex-1 h-full w-full bg-transparent focus:outline-none"
							name="password"
							id="password"
							type="password"
							value={credentials.password}
							required
							onChange={(e) =>
								setCredentials({
									...credentials,
									password: e.target.value,
								})
							}
						/>
					</div>
				)}
				{step ? (
					<button
						className="bg-[#0063e5] text-white py-2 rounded-3xl cursor-pointer transition duration-200 ease-in-out hover:bg-[#0483ee] active:bg-[#004b91] w-full h-[50px]"
						type="submit"
						onClick={onChangeStep}
						disabled={!credentials.password.length}
					>
						Iniciar Sesion
					</button>
				) : (
					<button
						className="bg-[#0063e5] text-white py-2 rounded-3xl cursor-pointer transition duration-200 ease-in-out hover:bg-[#0483ee] active:bg-[#004b91] w-full h-[50px]"
						type="button"
						onClick={onChangeStep}
						disabled={!credentials.email.length}
					>
						Continuar
					</button>
				)}
				{error.length > 0 && (
					<div
						className="bg-red-500 text-sm text-white rounded-xl shadow-lg"
						role="alert"
					>
						<div className="flex p-4">
							{error}
							<div className="ms-auto">
								<button
									type="button"
									onClick={() => setError('')}
									className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
								>
									<span className="sr-only">Close</span>
									<svg
										className="flex-shrink-0 size-4"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M18 6 6 18" />
										<path d="m6 6 12 12" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Login;
