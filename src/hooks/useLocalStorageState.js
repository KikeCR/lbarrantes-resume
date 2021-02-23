import { useState, useEffect } from 'react';

function useLocalStorageState(key, initialValue) {
	// Creates piece of state based off of value in localStorage (or initialValue).
	const [ state, setState ] = useState(() => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(initialValue));
		} catch (error) {
			val = initialValue;
		}
		return val;
	});

	// Use useEffect to update localStorage when state changes.
	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ state ]
	);

	return [ state, setState ];
}

export default useLocalStorageState;
