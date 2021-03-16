import { useEffect, useState, RefObject } from "react";


export function useBoundingClientRect(ref: RefObject<HTMLElement>): ClientRect | null {
	const isClient = typeof window === 'object';

	const getRect = (): ClientRect | null =>
		isClient ? ref.current?.getBoundingClientRect() || null : null;

	const [clientRect, setClientRect] = useState(getRect);

	useEffect(() => {
		if (!isClient) {
			return;
		}

		function handleResize() {
			setClientRect(getRect());
		}

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [ref]);

	return clientRect;
};
