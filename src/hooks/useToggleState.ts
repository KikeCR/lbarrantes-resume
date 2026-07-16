import { useLocalStorageState } from './useLocalStorageState'

export const useToggleState = (
	key: string,
	initialVal = false,
): [boolean, () => void] => {
	const [isToggled, setIsToggled] = useLocalStorageState(key, initialVal)
	const toggle = () => {
		setIsToggled(!isToggled)
	}
	return [isToggled, toggle]
}
