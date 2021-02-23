import useLocalStorageState from '../hooks/useLocalStorageState';

function useToggle(initialVal = false) {
	// call useState, "reserve piece of state"
	const [ isDarkTheme, setIsDarkTheme ] = useLocalStorageState('theme', initialVal);
	const toggle = () => {
		setIsDarkTheme(!isDarkTheme);
	};
	// return piece of state AND a function to toggle it
	return [ isDarkTheme, toggle ];
}
export default useToggle;
