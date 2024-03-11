import { PropsWithChildren, useEffect, useRef, useState } from 'react';

interface Props extends PropsWithChildren {
	name: string;
	profilePic: string;
}

export const ProfileDropdown = ({ name, profilePic, children }: Props) => {
	const [enter, setEnter] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement | null>(null);

	const toggleMenu = () => setEnter((prev) => !prev);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setEnter(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	return (
		<div ref={ref} className="cursor-pointer" onClick={toggleMenu}>
			<div className="text-white flex items-center">
				<strong className="mr-2">{name}</strong>
				<svg
					fill="#ffffff"
					height="15px"
					width="15px"
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 490 490"
					xmlSpace="preserve"
					stroke="#ffffff"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{' '}
						<path d="M490,165.37l-91.698-88.842L245,231.766L91.698,76.528L0,165.37l245,248.102L490,165.37z M91.219,119.611L245,275.343 l153.781-155.732l47.717,46.237L245,369.91L43.502,165.848L91.219,119.611z"></path>{' '}
					</g>
				</svg>
			</div>

			{enter && children}
		</div>
	);
};
