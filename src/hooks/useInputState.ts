import { useState, type ChangeEvent } from 'react';

type InputElement = HTMLInputElement | HTMLTextAreaElement;

export default (initialValue = ''): [string, (e: ChangeEvent<InputElement>) => void, () => void] => {
	const [ value, setValue ] = useState(initialValue);
	const handleChange = (e: ChangeEvent<InputElement>) => {
		setValue(e.target.value);
	};
	const reset = () => {
		setValue('');
	};
	return [ value, handleChange, reset ];
};
