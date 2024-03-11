import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	className?: string;
}

export const PageLayout = ({ className, children }: Props) => {
	return (
		<div
			className={`bg-disney-login bg-no-repeat bg-cover h-[100vh] bg-center ${className}`}
		>
			{children}
		</div>
	);
};
