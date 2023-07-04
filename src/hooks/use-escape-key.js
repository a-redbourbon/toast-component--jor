import React, { useCallback } from 'react';

function useEscapeKey(callback) {
	const handleKeydown = useCallback(
		(event) => {
			if (event.code === 'Escape') {
				callback();
			}
		},
		[callback]
	);

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, [handleKeydown]);
}

export default useEscapeKey;
