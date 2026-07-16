import useLocalStorageState from './useLocalStorageState';

function useToggle(key: string, initialVal = false): [boolean, () => void] {
	const [ isToggled, setIsToggled ] = useLocalStorageState(key, initialVal);
	const toggle = () => {
		setIsToggled(!isToggled);
	};
	return [ isToggled, toggle ];
}
export default useToggle;
