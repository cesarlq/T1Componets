import { useState, useEffect } from 'react';

export interface UseScreenDimensionsI {
    width: number | null
    height: number | null
}

export const useScreenDimensions = () => {
	
	const getInitialSize = (): UseScreenDimensionsI => {
		if (typeof window === 'undefined') {
			return { width: null, height: null };
		}
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	};

	const [windowSize, setWindowSize] = useState<UseScreenDimensionsI>(getInitialSize);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		function handleResize() {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}, 300);
		}

		window.addEventListener('resize', handleResize);

		// Solo llamar handleResize si no tenemos dimensiones iniciales
		if (windowSize.width === null) {
			handleResize();
		}

		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(timeoutId);
		};
	}, []);

	return windowSize;
};

export default useScreenDimensions;
