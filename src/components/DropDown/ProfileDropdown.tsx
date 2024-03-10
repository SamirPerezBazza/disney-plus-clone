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
			<div className="text-white">{name}</div>

			{enter && children}
		</div>
	);
};
