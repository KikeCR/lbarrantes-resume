import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'

export const useLocalStorageState = <T>(
	key: string,
	initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
	// Creates piece of state based off of value in localStorage (or initialValue).
	const [state, setState] = useState<T>(() => {
		let val: T
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(initialValue))
		} catch (error) {
			val = initialValue
		}
		return val
	})

	// Use useEffect to update localStorage when state changes.
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state))
	}, [state])

	return [state, setState]
}
