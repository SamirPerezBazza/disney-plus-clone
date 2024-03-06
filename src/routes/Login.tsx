import { useState } from 'react';
import { User, useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

import Logo from '../assets/disney-logo.svg?react';

const Login = () => {
	const { user, login } = useAuth();

	const onSubmit = (data: User) => {
		login(data);
	};

	if (user) return <Navigate to="/" />;

	return (
		<div className="bg-disney-login bg-no-repeat bg-cover h-[100vh] bg-center">
			<div className="flex flex-col gap-5 items-center h-full">
				<div>
					<Logo />
				</div>

				<Card onSubmit={onSubmit} />
			</div>
		</div>
	);
};

interface CardProps {
	onSubmit: (data: User) => void;
}

const Card = ({ onSubmit }: CardProps) => {
	const [step, setStep] = useState<number>(0);

	const [credentials, setCredentials] = useState<User>({
		email: '',
		password: '',
	});

	const onChangeStep = () => {
		if (!step) return setStep((prev) => prev + 1);
		onSubmit(credentials as User);
	};

	return (
		<div className="bg-white rounded-3xl w-[580px] h-1/2 py-[56px] px-[72px]">
			<h3>{step ? 'Paso 2' : 'Paso 1'}</h3>
			<h2>
				{step
					? 'Escribe tu contraseña'
					: 'Escribe tu correo para continuar'}
			</h2>
			<p>
				{step
					? `Es necesario iniciar sesión en la cuenta con tu correo: ${credentials.email}`
					: 'Es necesario iniciar sesión en tu cuenta. En caso de no tener una, recibirás indicaciones para crearla.'}
			</p>

			<div className="flex flex-col gap-8">
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
						type="submit"
						onClick={onChangeStep}
						disabled={!credentials.password.length}
					>
						Iniciar Sesion
					</button>
				) : (
					<button
						type="button"
						onClick={onChangeStep}
						disabled={!credentials.email.length}
					>
						Continuar
					</button>
				)}
			</div>
		</div>
	);
};

export default Login;
